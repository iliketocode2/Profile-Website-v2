import { Hobby } from "@/app/lib/types";
import Image from "next/image";

export default function HobbyCard({ title, image, description }: Hobby) {
  return (
    <div className="break-inside-avoid mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        {description}
      </p>
    </div>
  );
}