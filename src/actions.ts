//@ts-nocheck
"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { generateToken, verifyToken } from "./services/jwt";
import prismaClient from "./services/prisma";
import { Item } from "../generated/prisma";

export async function logOutUser() {
  const cookie = await cookies();
  cookie.delete("token");
}

export async function getCurrentUser() {
  const cookie = await cookies();
  const token = cookie.get("token")?.value || "";

  if (!token) {
    return null;
  }

  let user;
  try {
    user = verifyToken(token);
  } catch (err) {
    console.log(err);
    redirect("/");
  }

   try {
    const userData = await prismaClient.user.findUnique({
      where: {
        id: user.id,
      },
      omit : {
        password : true
      }
    });

    if (!userData) {
      redirect("/"); 
    }

    return userData;

  } catch (err) {
    console.error("Error while fetching user data from DB:", err);
    redirect("/"); 
  }
}

export async function deletePost(id : string) {
  try {
    await prismaClient.item.delete({
      where: {
        id: id,
      },
    });
    return {
      success: true,
    };
  } catch (err : any) {
    return {
      success: false,
      message: err.message,
    };
  }
}

export async function updatePost(updatedData : Item, id : string) {
  try {
    await prismaClient.item.update({
      where: {
        id: id,
      },
      data: updatedData,
    });
    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
}

export async function isLoggedIn() {
  const cookie = await cookies();
  const token = cookie.get("token")?.value || "";

  if (!token) {
    return false;
  }
  return true
}

export async function getPosts() {
  const data = await prismaClient.item.findMany();
  return data;
}