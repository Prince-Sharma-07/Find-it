import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){
    try{
        const body = await req.json();
        const item = await prismaClient.item.create({
            data : body
        })
        if(item?.id){
            return NextResponse.json({
                success: true,
                data : item,
                message: "Item posted successfully!"
            })
        }else{
            return NextResponse.json({
                success: false,
                message: "Something went wrong on server side!"
            })
        }
    }catch(err : any){
        return NextResponse.json({
            success: false,
            message: err.message
        })
    }
}