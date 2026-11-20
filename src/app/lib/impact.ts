export interface CommunityContribution {
  name: string;
  logo: string; // Small logo shown on a white tile
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
    logo: '/images/impact/invent.png',
    description: 'A PyScript-based framework for building creative websites.',
    highlights: ['Framework development and docs', 'New Webcam and Donkey widgets'],
    repoUrl: 'https://github.com/invent-framework/invent',
    links: [
      {
        label: 'Contribution report',
        url: 'https://iliketocode2.github.io/invent/examples/final_report/index.html',
      },
    ],
  },
  {
    name: 'PyScript',
    logo: '/images/impact/pyscript.svg',
    description: 'The open source platform for running Python in the browser.',
    highlights: ['Issue fixes and community contributions', 'PyScript in education'],
    repoUrl: 'https://github.com/pyscript/pyscript',
  },
  {
    name: 'Generalized ADCS',
    logo: '/images/impact/starlab.svg',
    description: 'A Python framework for satellite attitude determination and control. I’m its open source community manager.',
    highlights: ['Faster simulations', 'Examples built on the Tufts CubeSat mission'],
    repoUrl: 'https://github.com/nscheuer/Generalized_ADCS',
  },
  {
    name: 'Open OnDemand',
    logo: '/images/impact/open-ondemand.svg',
    description: 'Writing features for the next release of the Open OnDemand HPC portal.',
    highlights: ['Collapsible app list dropdowns', 'Customizable pinned apps'],
    repoUrl: 'https://github.com/OSC/ondemand',
  },
];

const timelineEntriesUnsorted: TimelineEntry[] = [
  {
    date: 'March 2026',
    sortDate: '2026-03',
    title: 'GOOD Conference Presentation',
    subtitle: 'Tufts Technology Services · Salt Lake City, UT',
    description: 'Talk on open source contributions and research technology work.',
    type: 'talk',
    links: [
      {
        label: 'LinkedIn post',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7437886390618505216/',
      },
    ],
  },
  {
    date: 'April 2026',
    sortDate: '2026-04-19',
    title: 'Harvard HC³ Competition - 2nd Place',
    subtitle: 'Harvard University',
    description: 'Wrote programmatic solutions to math problems with Evan Zhang.',
    type: 'award',
  },
  {
    date: 'April 2026',
    sortDate: '2026-04-11',
    title: 'Tufts Datathon - Environmental Track Winner',
    subtitle: 'Tufts University',
    description: 'A wildfire prediction model for the state of Florida.',
    type: 'award',
  },
  {
    date: 'February 2026',
    sortDate: '2026-02-22',
    title: 'JumboHack - AI Track Winner',
    subtitle: 'Tufts University',
    description: 'A GitHub Action that checks pull requests for accessibility issues.',
    type: 'award',
  },
];

export const timelineEntries = [...timelineEntriesUnsorted].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate),
);
