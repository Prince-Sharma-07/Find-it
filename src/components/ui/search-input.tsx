//@ts-nocheck
'use client'
import { SearchIcon } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

export default function SearchInput() {
  return (
    <form
      onSubmit={e=>e.preventDefault()}
      className={"flex border-2 bg-transparent items-center rounded-md justify-between w-full"}
    >
      <label htmlFor="searchbox" className="flex items-center p-2">
      <SearchIcon className=""/>
      </label>
      <input
        id="searchbox"
        type="search"
        placeholder="Search"
        className="border-none outline-none px-1 sm:flex-1"
      />
      
      <Link href='/search'>
      <Button type="submit" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 cursor-pointer">
        Search
      </Button>
      </Link>
    </form>
  );
}
