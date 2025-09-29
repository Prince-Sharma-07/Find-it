'use client'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { toast } from "sonner";
import { User } from "../../generated/prisma";

type UserContextType = {
  user : User | null
}

const userContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    async function getUser() {
      const res = await fetch("/api/get-user");
      const data = await res.json();
      if (data.success) {
        setUser(data.data);
      } else {
        console.log(data.message);
        toast("Something went wrong!");
      }
    }
    getUser();
  },[]);

  return <userContext.Provider value={{user}}>{children}</userContext.Provider>;
}

export function useUserContext() {
  const context = useContext(userContext);
  if(!context) throw new Error("useUserContext must be used within UserContextProvider");
  return context;
}
