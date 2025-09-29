import prismaClient from "@/services/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prismaClient.item.findMany();
    if (posts.length) {
      return NextResponse.json({
        success: true,
        data: posts,
        message: "All Posts Loaded!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong on server!",
      });
    }
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
