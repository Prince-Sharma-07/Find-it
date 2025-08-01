//@ts-nocheck
'use client'
import Link from "next/link";

export default function UserBar({user}) {
  const closeDrawer = () => {
    const checkbox = document.getElementById("my-drawer-4") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };
  return (
    <li onClick={closeDrawer}>
      {user ? (
        <Link href="/profile" className="hover:text-green-400">
          <div className="flex gap-3 items-center">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>
            <div className="hover:text-green-400">{user.name}</div>
          </div>
        </Link>
      ) : (
        <Link href="/login" className="hover:text-green-400">
          Login / Register
        </Link>
      )}
    </li>
  );
}
