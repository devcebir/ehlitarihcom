"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoonFill } from "react-icons/pi";

export default function ThemeComp() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;
  return (
    <div className="flex items-center gap-2 border border-zinc-200 rounded-full py-1 px-3">
      {mounted &&
        (themeMode === "light" ? (
          <PiMoonFill
            onClick={() => setTheme("dark")}
            className="text-2xl transform hover:-rotate-180 transition-all duration-1000 cursor-pointer"
          />
        ) : (
          <IoSunnyOutline
            onClick={() => setTheme("light")}
            className="text-2xl transform hover:rotate-180 transition-all duration-1000 cursor-pointer"
          />
        ))}
    </div>
  );
}
