"use client";
import { Locate } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPasword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos : GeolocationPosition) {
  console.log(pos)
  const crd = pos.coords;
  setAddress(JSON.stringify(crd));
}

function errors(err : any) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

  function handleCurrentLocation(){
     navigator.geolocation.getCurrentPosition(success , errors , options)
  }

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();

    const user = {
      name,
      email,
      address,
      password,
      confirmPassword,
    };

    const res = await fetch('/api/signup' , {
      method : "POST",
      body: JSON.stringify(user)
    })

    const data = await res.json();
    console.log(data);
    if (!data.success) {
      if (data.message.includes("User_email_key")) {
        setError("User already Exists!");
      } else {
        console.log(data.message);
        setError("Something went Wrong");
      }
    } else {
      toast("Signed Up Successfully!")
      redirect("/");
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
        <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
        <p className="mb-6">Start helping your community today</p>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col gap-4 w-full px-8"
        >
          {error ? (
            <p className="text-red-400 text-center w-full">{error}</p>
          ) : (
            <></>
          )}
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
            Address
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Location"
              className="p-2 rounded-lg border-[#1E293B] border"
            />
            <button type="button" onClick={handleCurrentLocation} className="text-start flex gap-2"><Locate /> Current Location</button>
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

          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            <span className="text-sm">I agree to the Terms and Conditions</span>
          </label>
          <div>
            Already a User?{" "}
            <Link href={"/login"} className="text-blue-400 hover:text-blue-500">
              Login.
            </Link>
          </div>
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
