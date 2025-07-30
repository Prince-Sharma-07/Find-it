//@ts-nocheck
"use client";
import { signUpUser } from "@/actions";
import { FormEvent, useState } from "react";

export default function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [password, setPasword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();

    const user = {
      name,
      email,
      location,
      password,
      confirmPassword,
    };

    const res = await signUpUser(user);

    if (!res.success) {
      setError(res.message);
    } else {
      alert(res.message);
    }
  }
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-[#107e43] to-[#067954] p-8 gap-8">
        <h1 className="text-white text-5xl font-bold">
          Join Your Community Network
        </h1>
        <p className="text-[#DCFCE7] text-xl">
          Connect with neighbors, help find lost items, and make your community
          stronger.
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center bg-primary p-8 text-white shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
        <p className="mb-6">Start helping your community today</p>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col gap-4 w-full px-8"
        >
          {error ? <p className="text-red-400">{error}</p> : <></>}
          <label className="flex flex-col gap-2">
            Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="p-2 rounded-lg border-[#1E293B] border"
            />
          </label>
          <label className="flex flex-col gap-2">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg border-[#1E293B] border"
            />
          </label>
          <label className="flex flex-col gap-2">
            Location
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Location"
              className="p-2 rounded-lg border-[#1E293B] border"
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
          <label className="flex flex-col gap-2">
            Confirm Password
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="p-2 rounded-lg border-[#1E293B] border"
            />
          </label>

          <label className="flex items-center gap-2 mb-4">
            <input type="checkbox" className="h-4 w-4" />
            <span className="text-sm">I agree to the Terms and Conditions</span>
          </label>

          <button
            type="submit"
            className="bg-[#067954] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#045d3d] transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
