/**
 * leadership. awooooo (wolf cry)
 */
export interface Leadership {
  role: string;
  org: string;
  href?: string;
  dates: string;
  summary: string;
  tags?: string[];
}

export const leadership: Leadership[] = [
  {
    role: 'Projects Lead',
    org: 'AI Club',
    href: 'https://aiclub.ics.uci.edu/',
    dates: '2025 - present',
    summary: 'Led CloudHacks 2025 + organized external tech industry partnered projects.',
  },
  /*
  {
    role: 'Role',
    org: 'Organization',
    dates: '2023 - present',
    summary: 'Outcome',
  },
  */
];
