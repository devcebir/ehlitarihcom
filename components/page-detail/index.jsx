"use client";
import Image from "next/image";
import { useState } from "react";
import "./page-detail.css";
import Link from "next/link";

export default function PageDetail({ title, subtitle, href, src }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-3xl overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt="Asya Hun Bayrak"
        className={`rounded-3xl ${
          isHovered ? "transition-all brightness-50 duration-1000" : ""
        }`}
        onLoad={(e) => {
          const { naturalWidth, naturalHeight } = e.target;
          const aspectRatio = naturalWidth / naturalHeight;

          const container = e.target.parentNode;
          container.style.width = "250px"; // Ajust this width as needed
          container.style.height = `${250 / aspectRatio}px`; // Maintain aspect ratio

          const overlay = container.querySelector(".overlay");
          overlay.style.top = `50%`;
          overlay.style.left = `50%`;
        }}
      />

      {isHovered && (
        <Link
          href={href}
          className="overlay text-center absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center  hover:bg-opacity-50 text-white rounded-3xl"
        >
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="">{subtitle}</p>
        </Link>
      )}
    </div>
  );
}
