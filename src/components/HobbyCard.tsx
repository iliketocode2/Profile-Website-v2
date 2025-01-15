import { Hobby } from "@/app/lib/types";

export default function HobbyCard({ title, image, description }: Hobby) {
    return (
      <div className="break-inside-avoid mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h2>
        <img
          src={image}
          alt={title}
          className="w-full rounded-md mb-4"
        />
        <p className="text-gray-700 dark:text-gray-300 text-center">{description}</p>
      </div>
    );
  }