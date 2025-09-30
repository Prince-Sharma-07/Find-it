// components/DrawerLinks.tsx
'use client';

import Link from "next/link";

export function DrawerLinks() {
  const closeDrawer = () => {
    const checkbox = document.getElementById("my-drawer-4") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <>
      <li onClick={closeDrawer}>
        <Link href="/" className="hover:text-green-400 w-full block">Home</Link>
      </li>
      <li onClick={closeDrawer}>
        <Link href="/explore" className="hover:text-green-400 w-full block">Search</Link>
      </li>
      <li onClick={closeDrawer}>
        <Link href="/my-posts" className="hover:text-green-400 w-full block">My Posts</Link>
      </li>
      <li onClick={closeDrawer}>
        <Link href="/donate" className="hover:text-green-400 w-full block">Donate ❤️</Link>
      </li>
    </>
  );
}
