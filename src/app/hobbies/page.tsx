'use client'
import HobbyCard from '@/components/HobbyCard';
import { hobbies } from '@/app/lib/hobbies';

export default function HobbiesSection() {
    return (
      <div className="columns-1 md:columns-3 lg:columns-4 gap-3 p-2 sm:p-6">
        {hobbies.map((hobby, index) => (
          <HobbyCard key={index} {...hobby} />
        ))}
      </div>
    );
  }