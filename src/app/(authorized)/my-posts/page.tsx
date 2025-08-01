//@ts-nocheck
import { getCurrentUser } from "@/actions";
import MyFoundCard from "@/components/cards/my-found-card";
import MyLostCard from "@/components/cards/my-lost-card";
import ClientFeed from "@/components/layout/client-feed";
import Feed from "@/components/layout/search-feed";
import prismaClient from "@/services/prisma";

export default async function MyPosts() {
  const user = await getCurrentUser();

  const allItems = await prismaClient.item.findMany({
    where: {
      authorId: user.id,
    },
  });

  return (
    <div className="flex dark:bg-gradient-to-br from-[#0F182F] to-[#312F81] min-h-[calc(100vh-64px)] flex-col gap-2 w-full items-center ">
      <h2 className="p-4 font-semibold text-2xl dark:text-white">My Posts</h2>
      <ClientFeed initialData={allItems}/>
    </div>
  );
}
