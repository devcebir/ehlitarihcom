"use client";
import Image from "next/image";
import { useState } from "react";
import "./page-detail.css";
import Link from "next/link";

export default function PageDetail({ title, subtitle, href, src }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative  overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        priority
        alt="Asya Hun Bayrak"
        className={` ${
          isHovered ? "transition-all brightness-50 duration-1000 cursor-pointer" : ""
        }`}
      />

      {isHovered && (
        <Link
          href={href}
          className="overlay text-center absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center  hover:bg-opacity-50 text-white"
        >
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="">{subtitle}</p>
        </Link>
      )}
    </div>
  );
}
