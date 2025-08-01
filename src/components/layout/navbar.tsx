//@ts-nocheck
import { logOutUser } from "@/actions";
import { verifyToken } from "@/services/jwt";
import prismaClient from "@/services/prisma";
import { Search } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import ModeBtn from "../ui/mode-btn";
import { Button } from "../ui/button";
import Sidebar from "./sidebar";

export default async function Navbar() {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  let userData = {};
  let user = {};

  if (!token) {
  } else {
    try {
      userData = verifyToken(token);
    } catch (err) {
      console.log(err);
      redirect("/login");
    }
    user = await prismaClient.user.findUnique({
      where: {
        id: userData.id,
      },
      omit: {
        password: true,
      },
    });
  }
  return (
    <header className="h-16 sticky top-0 z-10 backdrop-blur-3xl bg-white/60 dark:bg-gray-900/60 dark:text-white flex items-center justify-between px-3 md:px-8  border-b">
      <Link href="/" className="flex items-center gap-2">
        <span className="p-2 bg-green-400 rounded-2xl">
          <Search />
        </span>
        <h1 className="text-xl font-bold">Find it</h1>
      </Link>

      <nav className="flex justify-center max-md:hidden">
        <ul className="flex items-center gap-6 font-medium text-lg">
          <li>
            <Link href="/" className="hover:text-green-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/search" className="hover:text-green-400">
              Search
            </Link>
          </li>
          <li>
            <Link href="/my-posts" className="hover:text-green-400">
              My Posts
            </Link>
          </li>
          <li>
            <Link href="/search" className="hover:text-green-400">
              Donate ❤️
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-4">
        {token ? (
          <div className="flex items-center gap-4">
            
            
          </div>
        ) : (
          <div className="flex items-center gap-5 max-sm:hidden">
            <Link
              href="/signup"
            >
              <Button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 cursor-pointer h-full"
              >
                Get Started
              </Button>
            </Link>
          </div>
        )}
        <ModeBtn />
        <Sidebar />
      </div>
    </header>
  );
}
