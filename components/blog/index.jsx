import Image from "next/image";
import Link from "next/link";

export default function BlogPost({ src, title, alt, postSrc }) {
  return (
    <div className="relative">
      <Link href={postSrc}>
        <Image
          src={src}
          alt={alt}
          priority
          className="w-[29rem] brightness-75"
        />
      </Link>
      <div className="absolute bottom-5 left-5 text-lg w-72 font-semibold text-white hover:-translate-y-4 hover:underline transform transition-all duration-300">
        <Link href={postSrc}>
          <h4>{title}</h4>
        </Link>
      </div>
    </div>
  );
}
