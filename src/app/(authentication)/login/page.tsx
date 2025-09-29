"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPasword] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    let isRedirected = false
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(user),
      });
      const data = await res.json();
      if(data?.success){
        isRedirected = true;
        toast(data.message);
      }
      else{
        setError(data.message)
      }
    } catch (err: any) {
      toast("Something went wrong");
      console.log("Error is " , err);
    }
    finally{
       if(isRedirected) redirect('/')  // redirect throws an error that's why it can't be used inside try block.
    }
  }

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex-1 max-md:hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#107e43] to-[#067954] p-8 gap-8">
        <h1 className="text-white text-5xl font-bold">
          Join Your Community Network
        </h1>
        <p className="text-[#DCFCE7] text-xl">
          Connect with neighbors, help find lost items, and make your community
          stronger.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center dark:bg-[#020817] p-8 dark:text-white shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Sign In to Your Account</h2>
        <p className="mb-6">Welcome back! Please enter your details.</p>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 w-full px-12"
        >
          {error ? (
            <p className="text-red-400 w-full text-center">{error}</p>
          ) : (
            <></>
          )}
          <label className="flex flex-col gap-2">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg border-border-secondary border"
            />
          </label>
          <label className="flex flex-col gap-2">
            Password
            <input
              value={password}
              onChange={(e) => setPasword(e.target.value)}
              type="password"
              placeholder="Password"
              className="p-2 rounded-lg border-[#1E293B] border"
            />
          </label>
          <div>
            New User?{" "}
            <Link
              href={"/signup"}
              className="text-blue-400 hover:text-blue-500"
            >
              Register.
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#067954] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#045d3d] transition cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
