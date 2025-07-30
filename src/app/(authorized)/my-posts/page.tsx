//@ts-nocheck
import { getCurrentUser } from "@/actions";
import Feed from "@/components/layout/feed";
import prismaClient from "@/services/prisma";

export default async function MyPosts() {
  const user = await getCurrentUser();

  const myItems = await prismaClient.item.findMany({
    where: {
      authorId: user.id,
    },
  });

  return (
    <div className="flex flex-col gap-2 w-full items-center ">
      <h2 className="p-4 font-semibold text-2xl">My Posts</h2>
      <Feed initialData={myItems} fallback={"No Posts Uploaded Yet..."}/>
    </div>
  );
}
