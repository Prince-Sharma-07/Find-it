import { generateToken } from "@/services/jwt";
import prismaClient from "@/services/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const cookie = await cookies();
    const user = await prismaClient.user.findUnique({
      where: {
        email: body.email,
      },
    });
    
    if (user && user?.password == body.password) {
      const token = generateToken({
        id: user.id,
      });
      cookie.set("token", token);
      return NextResponse.json({
        success: true,
        data: user,
        message: "Logged in Successfully!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Invalid Credentials!",
      });
    }
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}

export async function DELETE() {
  try {
    const cookie = await cookies();
    cookie.delete("token");
    return NextResponse.json({
      success: true,
      message: "Successfully logged out. We hope to see you again soon.",
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
