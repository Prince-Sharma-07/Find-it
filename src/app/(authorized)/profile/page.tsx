import { verifyToken } from "@/services/jwt";
import prismaClient from "@/services/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function Profile() {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token?.length) {
    redirect("/login");
  }

  let userData;
  try {
    userData = verifyToken(token);
  } catch (err) {
    console.log(err);
    redirect("/login");
  }

  const user = await prismaClient.user.findUnique({
    where: {
      id: userData.id,
    },
    omit: {
      password: true,
    },
  });

  return <div>{user?.name}</div>;
}
