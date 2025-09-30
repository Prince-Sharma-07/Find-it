import { SearchIcon } from "lucide-react";
import { Button } from "./button";

export default function SearchInput() {
  return (
    <form
      action={'/explore'}
      className={"flex border-2 bg-transparent items-center rounded-md justify-between w-full"}
    >
      <label htmlFor="searchbox" className="flex items-center p-2">
      <SearchIcon/>
      </label>
      <input
        id="searchbox"
        type="search"
        name="q"
        placeholder="Search"
        className="border-none outline-none px-1 sm:flex-1"
      />
      <Button type="submit" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 cursor-pointer">
        Search
      </Button>
    </form>
  );
}
