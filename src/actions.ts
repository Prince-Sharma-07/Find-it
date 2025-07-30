//@ts-nocheck
"use server";
import { cookies } from "next/headers";
import { generateToken } from "./services/jwt";
import prismaClient from "./services/prisma";
import { redirect } from "next/navigation";

export async function signUpUser(user : any) {
  try {
    const newUser = await prismaClient.user.create({
      data: user,
    });

    const token = generateToken({
      id: newUser.id,
      email: newUser.email
    });

    const cookie = await cookies();
    cookie.set("token", token);
    redirect("/");
    // return {
    //     success : true,
    //     message : "The user created successfully",
    //     data : newUser
    // }
  } catch (err : any) {
    return {
      success: false,
      message: err.message,
    };
  }
}

export async function signInUser(userData : any) {
  const user = await prismaClient.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  if (!user || user.password != userData.password) {
    return {
      success: false,
      message: "Invalid Credentials",
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

export async function logOutUser(){
    const cookie = await cookies()
    cookie.delete('token')
}

export async function addItem(itemData : any) {
  try{
    const item = await prismaClient.item.create({
      data : itemData
    })
    return {
      success : true,
      message : "Item listed successfully",
      data : item
    }
  }
  catch(err : any){
    console.log(err)
    return {
      success : false,
      message : err.message
    }
  }
}

export async function getAllItems() {
  try{
    const allItems = await prismaClient.item.findMany()
    return allItems
  }catch(err){
    console.log(err)
    return []
  }
}


