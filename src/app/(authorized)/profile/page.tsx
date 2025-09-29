import { getCurrentUser } from "@/actions";

export default async function Profile() {
  const user = (await getCurrentUser());
  return (
    <div className="min-h-[50vh] flex flex-col items-center gap-5 p-4 dark:bg-gray-900">
      <h1 className="text-2xl font-bold">My Profile</h1>
      <div className="w-full rounded-xl bg-white/30 shadow-[0px_0px_1px_2px_rgba(0,0,0,0.3)] p-4 flex justify-between gap-2 text-lg font-medium">
        <div className="flex flex-col gap-2">
          <span>Name: {user?.name}</span>
          <span>Email: {user?.email}</span>
        </div>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
      </div>
    </div>
  );
}
