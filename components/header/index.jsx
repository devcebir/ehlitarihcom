import Link from "next/link";
import { GiBowString } from "react-icons/gi";
import ThemeComp from "../themeComp";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between py-3 mb-1">
      <h1>
        <Link href="/">
          <GiBowString className="text-4xl hover:text-sky-900 transition-all duration-300" />
        </Link>
      </h1>

      <nav className="flex items-center justify-center gap-10 font-medium">
        <Link
          className="hover:text-sky-900 transition-all duration-300"
          href="/"
        >
          Kategori
        </Link>
        <Link
          className="hover:text-sky-900 transition-all duration-300"
          href="/"
        >
          Mağaza
        </Link>
      </nav>

      <div>
        <ThemeComp />
      </div>
    </header>
  );
}
