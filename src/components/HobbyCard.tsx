import { Hobby } from "@/app/lib/types";
import Image from "next/image";

export default function HobbyCard({ title, image, description }: Hobby) {
  return (
    <figure>
      <div className="relative w-full aspect-[4/3] rounded-[3px] overflow-hidden bg-rule">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3">
        <span className="block text-lg font-semibold text-ink">{title}</span>
        <span className="block mt-1 text-[15px] leading-relaxed text-graphite">{description}</span>
      </figcaption>
    </figure>
  );
}
