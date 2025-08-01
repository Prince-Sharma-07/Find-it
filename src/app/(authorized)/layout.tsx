//@ts-nocheck
import { Footer } from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function layout({ children } : {children : any}) {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <div>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}
