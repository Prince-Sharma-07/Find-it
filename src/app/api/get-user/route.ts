import { getCurrentUser } from "@/actions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userData = await getCurrentUser();
    if (userData) {
      return NextResponse.json({
        success: true,
        data: userData,
        message: "User data retrived successfully!",
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
