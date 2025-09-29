import SearchFeed from "@/components/layout/search-feed";
import SearchInput from "@/components/ui/search-input";

export default async function Search() {
 
  return (
    <div className="dark:bg-gradient-to-br from-[#0F182F] to-[#312F81] h-fit min-h-[calc(100vh-64px)] w-full flex flex-col items-center gap-6 py-4">
      <section className="flex flex-col gap-5 w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] items-center p-4 text-center ">
        <h2 className="text-4xl dark:text-white font-bold">
          Search Lost & Found Items
        </h2>
        <p className="text-xl  text-center dark:text-gray-300">
          Find what you&apos;re looking for or help others reunite with their
          belongings
        </p>
        <SearchInput />
      </section>
      <SearchFeed />
    </div>
  );
}
