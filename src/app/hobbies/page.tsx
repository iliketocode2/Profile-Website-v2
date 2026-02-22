'use client'
import HobbyCard from '@/components/HobbyCard';
import { hobbies } from '@/app/lib/hobbies';

export default function HobbiesSection() {
    return (
      <div className="columns-1 md:columns-3 lg:columns-4 gap-3 p-2 sm:p-6">
        {/* A11y-prone: image without alt, unlabeled input, clickable div, vague link, low contrast */}
        <section className="mb-4">
          <img src="/placeholder-hobby.svg" width={120} height={80} />
          <input type="text" placeholder="Filter hobbies..." className="border p-2 rounded" />
          <div
            className="cursor-pointer underline text-blue-600"
            onClick={() => alert('Clicked')}
          >
            Clear filters
          </div>
          <a href="/hobbies">Click here</a>
          <button>Test</button>
          <p className="text-[#b0b0b0] bg-white">Low contrast helper text</p>
        </section>
        {hobbies.map((hobby, index) => (
          <HobbyCard key={index} {...hobby} />
        ))}
      </div>
    );
  }