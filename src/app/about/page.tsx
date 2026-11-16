import HobbyCard from '@/components/HobbyCard';
import { hobbies } from '@/app/lib/hobbies';

const BIO_PARAGRAPHS = [
  `Hi, I'm Will! I'm a junior at Tufts University studying Mechanical Engineering and Computer Science.
  In addition to my studies, I work as a Process Automation Intern at Draper Labs
  and I serve as the captain of the Tufts CubeSat team, where I lead a group of students in designing and building a small satellite.
  Some of my current interests include web/interface development, managing compute, aerospace engineering, and robotics.`,

  `I learn quickly and enjoy working with others, or independently on smaller projects.
  I've worked across the full stack on web-based projects and have recently been building systems that connect software and hardware
  through UART, BLE, and serial connection.
  On the mechanical side, I've led a competition robotics team (FTC Team 5276), contributing to CAD modeling,
  machining, simulation, and systems integration in addition to my current work as the CubeSat lead.`,

  `In my free time, I enjoy watching Chelsea FC, building with LEGO, and skiing whenever I get the chance.
  Feel free to reach out if you'd like to collaborate on a project or just chat about tech, engineering, or anything else!`,
];

export default function About() {
  return (
    <div className="w-full pt-12 sm:pt-16 pb-8">
      <section className="grid grid-cols-1 lg:grid-cols-[14rem_1fr] gap-x-12 pb-16">
        <h1 className="display text-5xl sm:text-6xl font-black text-ink mb-8">About</h1>
        <div className="space-y-5 max-w-measure lg:pt-3">
          {BIO_PARAGRAPHS.map((paragraph, index) => (
            <p key={index} className="text-[17px] sm:text-lg leading-relaxed text-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="border-t-[1.5px] border-ink pt-10">
        <h2 className="display text-3xl sm:text-4xl font-extrabold text-ink mb-8">Outside of class</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.title} {...hobby} />
          ))}
        </div>
      </section>
    </div>
  );
}
