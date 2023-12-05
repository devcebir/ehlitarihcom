import Image from "next/image";
import Link from "next/link";

export default function BlogPost({ src, title, alt, postSrc }) {
  return (
    <div className="relative max-[768px]:flex max-[768px]:flex-col max-[768px]:gap-2">
      <Link href={postSrc}>
        <Image
          src={src}
          alt={alt}
          priority
          className="w-[29rem] max-[768px]:w-[60rem] brightness-75"
        />
      </Link>
      <div className="text-sm hidden max-[768px]:block">
        <Link href={postSrc}>
          <h4>{title}</h4>
        </Link>
      </div>

      <div className="absolute bottom-5 left-5 text-sm font-semibold text-white hover:-translate-y-4 hover:underline transform transition-all duration-300 max-[768px]:hidden">
        <Link href={postSrc}>
          <h4>{title}</h4>
        </Link>
      </div>
    </div>
  );
}
