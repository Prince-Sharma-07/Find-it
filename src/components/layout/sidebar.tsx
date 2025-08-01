//@ts-nocheck
import { getCurrentUser, isLoggedIn, logOutUser } from "@/actions";
import { LogOut, Menu } from "lucide-react";
import { DrawerLinks } from "../ui/drawer-links";
import UserBar from "../ui/user-bar";

export default async function Sidebar() {
  const isLogged = await isLoggedIn();
  const user = await getCurrentUser();

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}

        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn bg-green-400 border-none text-black"
        >
          <Menu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          id="my-drawer-4"
          className="menu bg-base-200 text-base-content min-h-full w-80 p-4"
        >
          <UserBar user={user} />

          {/* <li>
            <Link href="/" className="hover:text-green-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/search" className="hover:text-green-400">
              Search
            </Link>
          </li>
          <li>
            <Link href="/my-posts" className="hover:text-green-400">
              My Posts
            </Link>
          </li>
          <li>
            <Link href="/search" className="hover:text-green-400">
              Donate ❤️
            </Link>
          </li> */}
          <DrawerLinks />
          {isLogged ? (
            <li>
              <form action={logOutUser}>
                <button className="hover:text-green-400 flex gap-2 items-center cursor-pointer">
                  Logout <LogOut />
                </button>
              </form>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
}
