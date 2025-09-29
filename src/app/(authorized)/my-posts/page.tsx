import { getCurrentUser } from "@/actions";
import ClientFeed from "@/components/layout/client-feed";

export default async function MyPosts() {
  const user = await getCurrentUser();
  let allItems = [];
  const res = await fetch(process.env.HOST_NAME + "/api/my-posts/" + user?.id);
  const data = await res.json();
  if (data.success) allItems = data?.data;
  else console.log(data.message);

  return (
    <div className="flex dark:bg-gradient-to-br from-[#0F182F] to-[#312F81] min-h-[calc(100vh-64px)] flex-col gap-2 w-full items-center ">
      <h2 className="p-4 font-semibold text-2xl dark:text-white">My Posts</h2>
      <ClientFeed initialData={allItems} />
    </div>
  );
}
