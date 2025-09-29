import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const posts = await prismaClient.item.findMany({
      where: {
        authorId: id,
      },
    });
    if (posts.length) {
     return NextResponse.json({
        success: true,
        data: posts,
        message: "User's Posts Loaded...",
      });
    } else {
     return NextResponse.json({
        success: false,
        message: "Something went wrong on server side!",
      });
    }
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
