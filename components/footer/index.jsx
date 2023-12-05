import { GiBowArrow } from "react-icons/gi";

export default function Footer() {
  return (
    <div className="flex flex-col px-56 max-[1286px]:px-44 max-[1024px]:px-20 max-[768px]:px-3">
      <div className="flex items-center justify-center gap-3">
        <div className="w-full h-[1px] bg-black dark:bg-white rounded-full"></div>
        <GiBowArrow className="text-5xl" />
        <div className="w-full h-[1px] bg-black dark:bg-white rounded-full"></div>
      </div>
    </div>
  );
}
