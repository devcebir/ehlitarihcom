import { GiBowArrow } from "react-icons/gi";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoonFill } from "react-icons/pi";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-white  flex items-center justify-between px-56">
      <Link
        href="/"
        className="flex items-center gap-3 hover:text-[#27374ddc] transition-all duration-300 py-3"
      >
        <GiBowArrow className="text-5xl" />
        <h1 className="text-3xl font-bold">EHL-İ TARİH</h1>
      </Link>

      <nav className="flex items-center gap-10 font-semibold">
        <Link
          href="/turk-tarihi"
          className="hover:bg-transparent text-xl  hover:text-[#27374ddc] transition-all duration-300"
        >
          Türk Tarihi
        </Link>
        <Link
          href="/islam-tarihi"
          className="hover:bg-transparent text-xl  hover:text-[#27374ddc] transition-all duration-300"
        >
          İslam Tarihi
        </Link>

        <div className="flex items-center gap-2 border border-zinc-200 rounded-full py-1 px-3">
          <IoSunnyOutline className="text-2xl transform hover:rotate-180 transition-all duration-1000 cursor-pointer" />
          <PiMoonFill className="text-2xl transform hover:-rotate-180 transition-all duration-1000 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}
