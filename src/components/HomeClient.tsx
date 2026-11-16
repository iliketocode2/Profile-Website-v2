'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/app/lib/types';
import { getProjectHref } from '@/app/lib/utils';
import DisciplineMark from './DisciplineMark';

// The facts that would sit in an engineering drawing's title block
function TitleBlock() {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: 'Working at', value: 'Draper, software & automation' },
    {
      label: 'Leading',
      value: (
        <a href="https://tufts-cubesat.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-link">
          Tufts CubeSat Team
        </a>
      ),
    },
    { label: 'Studying', value: "CS and mechanical engineering, Tufts '28" },
    {
      label: 'Contact',
      value: (
        <a href="mailto:William.Goldman@tufts.edu" className="text-link break-all">
          William.Goldman@tufts.edu
        </a>
      ),
    },
  ];

  return (
    <dl className="hero-block grid grid-cols-1 sm:grid-cols-2 border-[1.5px] border-ink text-[15px]">
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={`px-4 py-3 border-ink/25 ${i > 0 ? 'border-t sm:border-t-0' : ''} ${
            i >= 2 ? 'sm:border-t' : ''
          } ${i % 2 === 1 ? 'sm:border-l' : ''}`}
        >
          <dt className="text-xs text-graphite">{row.label}</dt>
          <dd className="mt-0.5 text-ink font-medium">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function FeaturedProject({ project, lead }: { project: Project; lead: boolean }) {
  const { href, external } = getProjectHref(project);
  const [datePart] = project.date.split(' | ');

  const content = (
    <>
      <div className={`relative w-full overflow-hidden rounded-[3px] bg-rule ${lead ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
        <Image
          src={project.imageUrl}
          alt=""
          fill
          className="object-cover"
          sizes={lead ? '(max-width: 1024px) 100vw, 700px' : '(max-width: 1024px) 100vw, 340px'}
          priority={lead}
        />
      </div>
      <div className="mt-3 flex items-center gap-3 text-sm text-graphite">
        <DisciplineMark discipline={project.discipline} />
        <span>{datePart}</span>
      </div>
      <h3
        className={`mt-1 font-semibold text-ink leading-snug decoration-kapton decoration-2 underline-offset-4 group-hover:underline ${
          lead ? 'text-2xl sm:text-[28px]' : 'text-lg'
        }`}
      >
        {project.title}
      </h3>
    </>
  );

  const className = 'group block';
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export default function HomeClient({ featuredProjects }: { featuredProjects: Project[] }) {
  const [lead, ...rest] = featuredProjects;

  return (
    <div className="pb-8">
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24">
        <h1 className="hero-name display font-black text-ink text-[clamp(3.25rem,15.5vw,10.5rem)]">
          William
          <br />
          Goldman
        </h1>
        <div className="mt-10 sm:mt-14 lg:ml-auto lg:w-[38rem]">
          <TitleBlock />
          <p className="mt-4 text-[15px]">
            <Link href="/about" className="text-ink text-link">
              More about me
            </Link>
          </p>
        </div>
      </section>

      {lead && (
        <section>
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="display text-2xl sm:text-3xl font-extrabold text-ink">Featured projects</h2>
            <Link href="/projects" className="text-[15px] text-ink text-link">
              All projects
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FeaturedProject project={lead} lead />
            </div>
            <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-1">
              {rest.map((project) => (
                <FeaturedProject key={project.title} project={project} lead={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
