export interface CommunityContribution {
  name: string;
  description: string;
  highlights: string[];
  repoUrl: string;
  links?: { label: string; url: string }[];
}

export interface TimelineEntry {
  date: string;
  sortDate: string;
  title: string;
  subtitle?: string;
  description: string;
  type: 'award' | 'talk';
  links?: { label: string; url: string }[];
}

export const communityContributions: CommunityContribution[] = [
  {
    name: 'Invent',
    description:
      'Contributing to the Invent framework, a PyScript-based platform for building creative websites!',
    highlights: [
      'Framework development and documentation',
      'Created new widgets: Webcam, Donkey',
    ],
    repoUrl: 'https://github.com/invent-framework/invent',
    links: [
      {
        label: 'Contribution Report',
        url: 'https://iliketocode2.github.io/invent/examples/final_report/index.html',
      },
    ],
  },
  {
    name: 'PyScript',
    description:
      'Contributing to PyScript, the open source platform for running Python in the browser.',
    highlights: [
      'Community contributions and issue resolution',
      'Exploring PyScript integrations in education',
    ],
    repoUrl: 'https://github.com/pyscript/pyscript',
  },
  {
    name: 'Generalized ADCS',
    description:
      'Currently the Open Source Community Manager for this Python framework for satellite attitude determination and control (ADCS).',
    highlights: [
      'Developed optimizations for running simulations',
      'Creating simulation examples using the Tufts CubeSat mission',
    ],
    repoUrl: 'https://github.com/nscheuer/Generalized_ADCS',
  },
  {
    name: 'Open OnDemand',
    description:
      'Writing new features for the next release of Open OnDemand!',
    highlights: [
      'Collapsible app list dropdowns',
      'Customizeable pinned apps on the dashboard',
    ],
    repoUrl: 'https://github.com/OSC/ondemand',
  },
];

const timelineEntriesUnsorted: TimelineEntry[] = [
  {
    date: 'March 2026',
    sortDate: '2026-03',
    title: 'GOOD Conference Presentation',
    subtitle: 'Tufts Technology Services · Salt Lake City, UT',
    description:
      'Presented on open source contributions and research technology work at the GOOD conference for Tufts Technology Services.',
    type: 'talk',
  },
  {
    date: 'April 2026',
    sortDate: '2026-04-19',
    title: 'Harvard HC³ Competition - 2nd Place',
    subtitle: 'Harvard University',
    description:
      'Placed 2nd in the first Harvard HC³ competition, working with Evan Zhang to write programatic solutions to various math problems.',
    type: 'award',
  },
  {
    date: 'April 2026',
    sortDate: '2026-04-11',
    title: 'Tufts Datathon - Environmental Track Winner',
    subtitle: 'Tufts University',
    description:
      'Won the environmental track at the Tufts Datathon with a wildfire prediction model for the state of Florida.',
    type: 'award',
  },
  {
    date: 'February 2026',
    sortDate: '2026-02-22',
    title: 'JumboHack - AI Track Winner',
    subtitle: 'Tufts University',
    description:
      'Won the AI track at JumboHack 2026 with a GitHub action that automates accessibility checking for pull requests in GitHub.',
    type: 'award',
  },
];

export const timelineEntries = [...timelineEntriesUnsorted].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate),
);
