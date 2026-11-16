const SITE_URL = 'https://tufts-cubesat.vercel.app/';
const GITHUB_URL = 'https://github.com/Tufts-CubeSat';

const MISSION_SPECS = [
  { label: 'Form factor', value: '2U CubeSat' },
  { label: 'Orbit', value: 'Low Earth orbit' },
  { label: 'Mission length', value: '14 months' },
  { label: 'Target launch', value: '2029' },
];

export default function CubeSatShowcase() {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] border-[1.5px] border-ink rounded-[3px] bg-panel">
      <div className="p-6 sm:p-8">
        <h3 className="display text-2xl sm:text-3xl font-black text-ink">Space Raccoon</h3>
        <p className="mt-1 text-[15px] text-graphite">Project lead, Tufts CubeSat Team</p>
        <p className="mt-5 text-base leading-relaxed text-ink max-w-measure">
          We&apos;re building a 2U CubeSat that uses onboard computer vision and machine learning to detect, classify,
          and assess the collision risk of space debris in Low Earth Orbit. Our flight software and debris data are
          all open source. Many thanks to CMU&apos;s Argus project which has served as our starting place.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-medium">
          <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="text-ink text-link">
            Team website
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-ink text-link">
            GitHub
          </a>
        </div>
      </div>

      <dl className="border-t lg:border-t-0 lg:border-l border-ink/25 text-[15px]">
        {MISSION_SPECS.map((spec, i) => (
          <div
            key={spec.label}
            className={`flex justify-between gap-4 px-6 py-4 ${i > 0 ? 'border-t border-ink/25' : ''}`}
          >
            <dt className="text-graphite">{spec.label}</dt>
            <dd className="text-ink font-medium text-right">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
