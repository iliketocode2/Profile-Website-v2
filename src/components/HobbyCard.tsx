import { Hobby } from "@/app/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HobbyCard({ title, image, description }: Hobby) {
  return (
    <motion.div 
      className="break-inside-avoid mb-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white text-center">
        {title}
      </h2>
      <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
          className="rounded-md object-cover"
        />
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        {description}
      </p>
    </motion.div>
  );
}