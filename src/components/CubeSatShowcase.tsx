import TextLink from '@/components/TextLink';

const SITE_URL = 'https://tufts-cubesat.vercel.app/';
const GITHUB_URL = 'https://github.com/Tufts-CubeSat';

const MISSION_FACTS = [
  { label: 'Satellite', value: 'SPACE RACCOON' },
  { label: 'Form factor', value: '2U CubeSat' },
  { label: 'Orbit', value: 'Low Earth orbit' },
  { label: 'Mission length', value: '14 months' },
  { label: 'Target launch', value: '2029' },
];

export default function CubeSatShowcase() {
  return (
    <div>
      <p className="max-w-2xl text-lg sm:text-xl leading-snug text-gray-900 dark:text-white">
        I lead the team building Tufts&apos;s first satellite, which uses onboard computer vision to detect space
        debris and assess its collision risk.
      </p>

      {/* Mission facts read as a single ruled row on wide screens, a short table on phones */}
      <dl className="mt-5 grid grid-cols-2 sm:grid-cols-5 border-y border-gray-200 dark:border-gray-800">
        {MISSION_FACTS.map((fact) => (
          <div
            key={fact.label}
            className="py-3 pr-4 border-b sm:border-b-0 border-gray-200 dark:border-gray-800 last:border-b-0"
          >
            <dt className="text-xs uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">{fact.label}</dt>
            <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-white">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-1 text-[15px]">
        <TextLink href={SITE_URL}>Team website</TextLink>
        <TextLink href={GITHUB_URL}>GitHub</TextLink>
        <span className="text-sm text-gray-500 dark:text-gray-400">Open source, built on CMU&apos;s Argus project</span>
      </p>
    </div>
  );
}
