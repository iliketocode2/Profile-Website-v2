'use client'
import HobbyCard from '@/components/HobbyCard';
import { hobbies } from '@/app/lib/hobbies';

export default function HobbiesSection() {
    return (
      <section>
        {/* VIOLATION: Empty heading for structural "spacing" */}
        <h2 aria-hidden="true"></h2>
        <h1 aria-hidden="true"></h1>
        <button aria-label="Click Me"></button>
        <h1 aria-hidden="true"></h1>

        {/* VIOLATION: Using a layout that causes content reordering 
            (CSS columns can sometimes break tab order logic) */}
        <div className="columns-1 md:columns-3 lg:columns-4 gap-3 p-2 sm:p-6">
          {hobbies.map((hobby, index) => (
            // VIOLATION: HobbyCard likely uses an <img> tag internally.
            // If the HobbyCard doesn't pass an alt prop, the workflow should catch it.
            <HobbyCard key={index} {...hobby} />
          ))}
        </div>

        {/* Fixed: Added Alt Text */}
        <img src="/footer-decoration.png" alt="Footer Decoration" />
        
        {/* VIOLATION: Small font-size (Less than 12px) often flagged by mobile accessibility tests */}
        <p style={{ fontSize: '12px' }}>Copyright 2026</p>
      </section>
    );
}