//@ts-nocheck
"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { generateToken, verifyToken } from "./services/jwt";
import prismaClient from "./services/prisma";

export async function signUpUser(user: any) {
  try {
    const newUser = await prismaClient.user.create({
      data: user,
    });

    const token = generateToken({
      id: newUser.id,
      email: newUser.email,
    });

    const cookie = await cookies();
    cookie.set("token", token);
    return {
      success: true,
      message: "The user created successfully",
      data: newUser,
    };
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
}

export async function signInUser(userData: any) {
  const user = await prismaClient.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  if (!user || user.password != userData.password) {
    return {
      success: false,
      message: "Invalid Email or Password",
    };
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
  });

  const cookie = await cookies();
  cookie.set("token", token);
  redirect("/");

  // return {
  //     success : true,
  //     message : "User Logged in Successfully",
  //     data : user
  // }
}

export async function logOutUser() {
  const cookie = await cookies();
  cookie.delete("token");
}

export async function addItem(itemData: any) {
  const user = await getCurrentUser();

  const cardData = {
    authorId: user.id,
    ...itemData,
  };

  try {
    const item = await prismaClient.item.create({
      data: cardData,
    });
    return {
      success: true,
      message: "Item listed successfully",
      data: item,
    };
  } catch (err: any) {
    console.log(err);
    return {
      success: false,
      message: err.message,
    };
  }
}

export async function getAllItems() {
  try {
    const allItems = await prismaClient.item.findMany();
    return allItems;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getCurrentUser() {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token?.length) {
    redirect("/");
  }

  let user;
  try {
    user = verifyToken(token);
  } catch (err) {
    console.log(err);
    redirect("/");
  }

  const userData = await prismaClient.user.findUnique({
    where: {
      id: user.id,
    },
  });

  return userData;
}

export async function deletePost(id) {
  
  try {
   await prismaClient.item.delete({
      where: {
        id: id
      },
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
