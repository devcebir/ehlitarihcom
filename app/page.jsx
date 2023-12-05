import asyahun from "@/public/asya-hun-devleti-tarihi-ve-kulturel-miras.svg";
import selcuklu from "@/public/selcuklu-devleti-kulturel-mirasi-medrese-sistemi-mimari-eserler.svg";
import Image from "next/image";
import BlogPost from "@/components/blog";
import Link from "next/link";

export const metadata = {
  title: "Ana Sayfa / Ehl-i Tarih",
  description: "Page description",
};

export default function page() {
  return (
    <main className=" px-2">
      <div className="flex gap-3 max-[768px]:flex-col">
        <div className="relative">
          <Image
            src={asyahun}
            alt="Asya-Hun"
            priority
            className="h-full w-[60rem] brightness-75"
          />
          <div className="absolute bottom-5 left-5 text-4xl max-[768px]:text-2xl font-semibold text-white hover:-translate-y-4 hover:underline transform transition-all duration-300">
            <Link href="/asya-hun-devleti-tarihi-ve-kulturel-miras">
              <h4>Asya Hun Devleti: Tarihi ve Kültürel Miras</h4>
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-[768px]:flex-row gap-3">
          <BlogPost
            src={selcuklu}
            alt="Selçuklu Devleti'nin Kültürel Mirası: Medrese Sistemi ve Mimari Eserler"
            title="Selçuklu Devleti'nin Kültürel Mirası: Medrese Sistemi ve Mimari Eserler"
            postSrc="/selcuklu-devleti-kulturel-mirasi-medrese-sistemi-mimari-eserler"
          />
          <BlogPost
            src={asyahun}
            alt="Göktürk"
            title="Göktürklerin Kuruluş ve Yükselme Tarihi"
            postSrc="/gokturk"
          />
        </div>
      </div>
    </main>
  );
}
