import { GiBowArrow } from "react-icons/gi";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoonFill } from "react-icons/pi";
import Link from "next/link";
import ThemeComp from "../themeComp";

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-slate-50 dark:bg-black flex items-center justify-between px-56 max-[1286px]:px-44 max-[1024px]:px-20 max-[768px]:px-10">
      <Link
        href="/"
        className="flex items-center gap-3 hover:text-[#27374ddc] dark:hover:text-[#DDE6ED] transition-all duration-300 py-3"
      >
        <GiBowArrow className="text-5xl" />
        <h1 className="text-3xl font-bold">EHL-İ TARİH</h1>
      </Link>

      <nav className="flex items-center gap-10 font-semibold">
        <Link
          href="/turk-tarihi"
          className="hover:bg-transparent text-xl  hover:text-[#27374ddc] dark:hover:text-[#DDE6ED] transition-all duration-300"
        >
          Türk Tarihi
        </Link>
        <Link
          href="/islam-tarihi"
          className="hover:bg-transparent text-xl  hover:text-[#27374ddc] dark:hover:text-[#DDE6ED] transition-all duration-300"
        >
          İslam Tarihi
        </Link>

        <ThemeComp />
      </nav>
    </header>
  );
}
