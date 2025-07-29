"use server";
import { cookies } from "next/headers";
import { generateToken } from "./services/jwt";
import prismaClient from "./services/prisma";
import { redirect } from "next/navigation";

export async function signUpUser(user) {
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
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
}

export async function signInUser(userData) {
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
    redirect('/login')
}

export async function addFoundItem(itemData) {
  try{
    const item = await prismaClient.foundItem.create({
      data : itemData
    })
    return {
      success : true,
      message : "Founded item listed successfully",
      data : item
    }
  }
  catch(err){
    console.log(err)
    return {
      success : false,
      message : err.message
    }
  }
}

export async function addLostItem(itemData) {
  try{
    const item = await prismaClient.lostItem.create({
      data : itemData
    })
    return {
      success : true,
      message : "Lost item listed successfully",
      data : item
    }
  }
  catch(err){
    console.log(err)
    return {
      success : false,
      message : err.message
    }
  }
}


