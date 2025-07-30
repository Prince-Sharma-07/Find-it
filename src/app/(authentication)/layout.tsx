import { getCurrentUser } from "@/actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  const cookie = await cookies()
  const token  = cookie.get('token')?.value
  if(token) redirect('/')
    
  return <div>{children}</div>;
}
