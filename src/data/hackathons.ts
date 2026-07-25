/**
 * hackathons page!!! yayyyy
 * Add an href to link the project (for example a Devpost page).
 */
export interface Hackathon {
  project: string;
  event: string;
  placement?: string;
  dates: string;
  summary: string;
  tags?: string[];
  links?: { label: string; href: string }[];
}

export const hackathons: Hackathon[] = [
  {
    project: 'LeShrine',
    event: 'IrvineHacks',
    placement: 'Meme Hack 2nd place',
    dates: '2025',
    summary: 'LeBron themed ad-blocker that blocks ads and replaces them with LeBron memes',
    tags: ['HTML', 'JavaScript'],
    links: [
      { label: 'Devpost', href: 'https://devpost.com/software/leshrine' },
      { label: 'GitHub', href: 'https://github.com/jonnypan2325/LeShrine' },
      { label: 'Slides', href: 'https://tinyurl.com/TheShrineDeck' },
    ],
  },
  /*
  {
    project: 'name',
    event: 'hackathon',
    placement: 'first place',
    dates: '2026',
    summary: 'desc',
    tags: ['tech stack'],
  },
  */
];
