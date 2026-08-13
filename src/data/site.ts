/**
 * Single source of truth for identity and links.
 * Every page updates and imports from this file.
 */
export const site = {
  name: 'Jonathan Pan',
  role: '',
  url: 'https://jonathanpan.me',

  tagline:
    'CS student at UC Irvine. I build software and AI systems, and I surf when I can.',

  /** Default meta description, used when a page does not set its own. */
  description: 'Personal website of Jonathan Pan, a CS student at UC Irvine.',

  resume: '/Jonathan_Pan_resume.pdf',

  /** Social preview image (1200x630), used for Open Graph. */
  ogImage: '/og.png',

  /** Paste the token from Google Search Console to verify the site. */
  googleSiteVerification: 'Q0XTEQOa1tHg99p4bgvNcMMrSPzOWzcUNcLNOLECsY0',

  /**
   * Surfboard counter (optional). Both values are public and safe to commit.
   * Leave counterApiUrl empty to keep the counter inactive.
   */
  counterApiUrl: 'https://surf-counter.jonathanp2325.workers.dev',
  turnstileSiteKey: '0x4AAAAAAENytQ1ynC_6vzIY',

  /**
   * `sameAs` identity claims must be each profile's canonical URL (ex. LinkedIn's includes `www.`).
   */
  links: [
    { label: 'GitHub', href: 'https://github.com/jonnypan2325' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathanypan' },
  ],
};

export const education = {
  school: 'University of California, Irvine',
  degree: 'B.S. Computer Science, expected 2027',
  dates: '2023 - 2027',
};

/** Navigation shown in the header. */
export const nav = [
  { label: 'Experience', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: site.resume },
];
