import Navbar from "@/components/layout/navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function layout({ children }) {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token?.length) {
    redirect("/login");
  }
  
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
