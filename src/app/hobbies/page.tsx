'use client'
import HobbyCard from '@/components/HobbyCard';
import { hobbies } from '@/app/lib/hobbies';

export default function HobbiesSection() {
    return (
      <section>
        {/* VIOLATION: Empty heading for structural "spacing" */}
        <h2></h2>

        {/* VIOLATION: Using a layout that causes content reordering 
            (CSS columns can sometimes break tab order logic) */}
        <div className="columns-1 md:columns-3 lg:columns-4 gap-3 p-2 sm:p-6">
          {hobbies.map((hobby, index) => (
            // VIOLATION: HobbyCard likely uses an <img> tag internally.
            // If the HobbyCard doesn't pass an alt prop, the workflow should catch it.
            <HobbyCard key={index} {...hobby} />
          ))}
        </div>

        {/* VIOLATION: Image without Alt Text (Hardcoded for the test) */}
        <img src="/footer-decoration.png" />
        
        {/* VIOLATION: Small font-size (Less than 12px) often flagged by mobile accessibility tests */}
        <p style={{ fontSize: '8px' }}>Copyright 2026</p>
      </section>
    );
}