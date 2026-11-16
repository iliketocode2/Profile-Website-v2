import { Project } from '@/app/lib/types';

// Projects without a discipline are software/research work, so they count as CS
export const DISCIPLINES = {
  'Computer Science': { short: 'CS', swatch: 'bg-cell', ring: 'ring-cell' },
  'Mechanical Engineering': { short: 'MechE', swatch: 'bg-kapton', ring: 'ring-kapton' },
} as const;

export default function DisciplineMark({ discipline }: { discipline: Project['discipline'] }) {
  const d = DISCIPLINES[discipline ?? 'Computer Science'];
  return (
    <span className="inline-flex items-center gap-1.5 text-ink">
      <span className={`h-2 w-2 ${d.swatch}`} aria-hidden />
      {d.short}
    </span>
  );
}
