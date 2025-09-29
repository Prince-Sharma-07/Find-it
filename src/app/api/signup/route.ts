import { generateToken } from "@/services/jwt";
import prismaClient from "@/services/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const cookie = await cookies();
    const user = await prismaClient.user.create({
      data: body,
    });
    const token = generateToken({
      id: user.id,
    });
    cookie.set("token", token);
    return NextResponse.json({
      success: true,
      data: user,
      message: "Thanks for joining, " + user.name,
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
