//@ts-nocheck
import Navbar from "@/components/layout/navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function layout({ children } : {children : any}) {
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
