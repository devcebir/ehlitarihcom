import { GiBowArrow } from "react-icons/gi";
import Link from "next/link";
import ThemeComp from "../themeComp";
import { IoMenuOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-slate-50 dark:bg-black flex mb-5 items-center justify-between px-56 max-[1286px]:px-44 max-[1024px]:px-20 max-[768px]:px-3">
      <Link
        href="/"
        className="flex items-center gap-3 hover:text-[#27374ddc] dark:hover:text-[#DDE6ED] transition-all duration-300 py-3"
      >
        <GiBowArrow className="text-5xl max-[768px]:text-3xl" />
        <h1 className="text-3xl font-bold max-[768px]:text-xl">EHL-İ TARİH</h1>
      </Link>

      <nav className="flex items-center gap-10 max-[768px]:gap-3 font-semibold">
        <Link
          href="/turk-tarihi"
          className="hover:bg-transparent text-xl  hover:text-[#27374ddc] dark:hover:text-[#DDE6ED] transition-all duration-300 max-[768px]:hidden"
        >
          Türk Tarihi
        </Link>
        <Link
          href="/islam-tarihi"
          className="hover:bg-transparent text-xl  hover:text-[#27374ddc] dark:hover:text-[#DDE6ED] transition-all duration-300 max-[768px]:hidden"
        >
          İslam Tarihi
        </Link>

        <IoMenuOutline className="text-2xl hidden max-[768px]:block" />
        <ThemeComp />
      </nav>
    </header>
  );
}
