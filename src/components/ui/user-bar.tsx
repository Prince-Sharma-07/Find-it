//@ts-nocheck
import { getCurrentUser } from "@/actions";
import Link from "next/link";

export default async function UserBar() {
  const user = await getCurrentUser();

  return (
    <div>
      {user ? (
        <div className="flex gap-3 items-center">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
          <Link href="/profile" className="hover:text-green-400">
            {user.name}
          </Link>
        </div>
      ) : (
        <Link href="/login" className="hover:text-green-400">
          Login / Register
        </Link>
      )}
    </div>
  );
}
