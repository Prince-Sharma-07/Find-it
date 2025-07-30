//@ts-nocheck
import { logOutUser } from "@/actions";
import { verifyToken } from "@/services/jwt";
import prismaClient from "@/services/prisma";
import { Search } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

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
    <header className="h-16 bg-[#020817] text-white flex items-center justify-between px-8  border-b-border-secondary border-b">
      <Link href="/" className="flex items-center gap-2">
        <span className="p-2 bg-green-400 rounded-2xl">
          <Search />
        </span>
        <h1 className="text-xl font-bold">Find It</h1>
      </Link>

      <nav className="flex justify-center max-md:hidden">
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/search" className="text-white hover:text-green-400">
              Search
            </Link>
          </li>
          <li>
            <Link href="/my-posts" className="text-white hover:text-green-400">
              My Posts
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-green-400">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/search" className="text-white hover:text-green-400">
              Donate ❤️
            </Link>
          </li>
        </ul>
      </nav>

      {token ? (
        <div className="flex items-center gap-4">
          <Link href="/profile" className="text-white hover:text-green-400">
            {user.name}
          </Link>
          <button
            onClick={logOutUser}
            className="text-white hover:text-green-400"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-white hover:text-green-400">
            Login
          </Link>
          <Link href="/signup" className="text-white hover:text-green-400">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
