import FoundCardInput from "../cards/FoundCardInput";
import LostCardInput from "../cards/LostCardInput";
import SearchInput from "../ui/search-input";

export default function Hero() {
  return (
    <div className="flex w-full flex-col items-center bg-[#F7F9FB] dark:bg-gray-900 p-8 gap-8 text-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
          Find What's{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            Lost
          </span>
          , Help What's{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Found
          </span>
        </h1>
        <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
          Connect with your community to reunite lost items with their owners.
          Together, we can make sure nothing stays lost forever.
        </p>
        <SearchInput />
      </div>

      <div className="flex-1 flex items-center justify-center p-2 dark:text-white  w-1/2 gap-8">
        <LostCardInput />
        <FoundCardInput />
        <button className="md:hidden text-nowrap font-medium px-4 py-2 border-[#22C55E] border rounded-md">
          Found item
        </button>
      </div>
    </div>
  );
}
