import { getCurrentUser } from "@/actions";
import { Footer } from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
