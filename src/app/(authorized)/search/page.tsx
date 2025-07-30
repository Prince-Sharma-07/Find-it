//@ts-nocheck
import { getAllItems } from "@/actions";
import FoundCard from "@/components/cards/found-card";
import LostCard from "@/components/cards/lost-card";
import SearchInput from "@/components/ui/search-input";

export default async function SearchFeed() {

  const allItems = await getAllItems();

  return (
    <div className="bg-gradient-to-br from-[#0F182F] to-[#312F81] min-h-[calc(100vh-64px)] w-full flex flex-col items-center gap-4">
      <section className="flex flex-col gap-5 w-[75%] items-center p-8  ">
        <h2 className="text-4xl text-white font-bold">
          Search Lost & Found Items
        </h2>
        <p className="text-xl w-[50%] text-center text-gray-300">
          Find what you&apos;re looking for or help others reunite with their
          belongings
        </p>
        <SearchInput className="w-[75%] mt-5 bg-[#020817] text-white" />
      </section>
      <main className="grid grid-cols-3 gap-8 w-[75%]">
        {allItems.length ? (
          allItems.map((item) =>
            item.status === "FOUND" ? (
              <FoundCard key={item.id} item={item} />
            ) : (
              <LostCard key={item.id} item={item}/>
            )
          )
        ) : (
          <div className="text-white font-medium col-start-2 text-xl">NO ITEMS FOUND...</div>
        )}
      </main>
    </div>
  );
}
