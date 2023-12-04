import { MdHistoryEdu } from "react-icons/md";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-white  flex items-center justify-between px-80">
      <Link
        href="/"
        className="flex items-center gap-3 hover:text-sky-950 transition-all duration-300 py-3"
      >
        <MdHistoryEdu className="text-5xl" />
        <h1 className="text-3xl font-bold">EHL-İ TARİH</h1>
      </Link>

      <nav className="flex items-center gap-10 font-semibold">
        <Link
          href="/turk-tarihi"
          className="hover:bg-transparent text-xl  hover:text-sky-950 transition-all duration-300"
        >
          Türk Tarihi
        </Link>
        <Link
          href="/islam-tarihi"
          className="hover:bg-transparent text-xl  hover:text-sky-950 transition-all duration-300"
        >
          İslam Tarihi
        </Link>
      </nav>
    </header>
  );
}
