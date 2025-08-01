//@ts-nocheck
"use client";
import { Theme } from "@radix-ui/themes";
import { createContext, useContext, useState } from "react";

const themeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <themeContext.Provider value={{ isDark, setIsDark }}>
      <Theme appearance={isDark ? 'dark' : 'light'}>{children}</Theme>
      {/* {children} */}
    </themeContext.Provider>   
  );
}

export function useThemeContext(){
  return useContext(themeContext)
}