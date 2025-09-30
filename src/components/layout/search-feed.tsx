import { getPosts } from "@/actions";
import { Item } from "../../../generated/prisma";
import FoundCard from "../cards/found-card";
import LostCard from "../cards/lost-card";

export default async function SearchFeed() {

  let allItems = await getPosts() ?? [];
 
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[85%] md:w-[85%] lg:w-[80%] xl:w-[75%] pb-20">
      {allItems?.length ? (
        allItems.map((item : Item) =>
          item.status === "FOUND" ? (
            <FoundCard key={item.id} item={item} />
          ) : (
            <LostCard key={item.id} item={item} />
          )
        )
      ) : (
        <div className="text-black font-medium col-start-2 text-xl">
          NO ITEMS FOUND...
        </div>
      )}
    </main>
  );
}
