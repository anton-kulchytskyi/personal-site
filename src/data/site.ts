/**
 * All site content lives here. Edit text and URLs in this file only —
 * components just render what they get from it.
 *
 * External (http/https) links open in a new tab automatically.
 */

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  kind: string;
  description: string;
  stack: string[];
  links: Link[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

const email = 'antek1809@gmail.com';

export const site = {
  name: { first: 'Anton', last: 'Kulchytskyi' },
  role: 'Full-Stack Developer',
  tagline: ['React', 'Next.js', 'TypeScript', 'Python'],
  location: 'Kyiv, Ukraine / Remote',

  meta: {
    title: 'Anton Kulchytskyi — Full-Stack Developer',
    description:
      'Full-stack developer with a frontend focus: web applications, business platforms and internal tools with React, Next.js, TypeScript, Python (FastAPI) and Node.js.',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ] satisfies Link[],

  email,

  socials: [
    { label: 'GitHub', href: 'https://github.com/anton-kulchytskyi' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anton-kulchytskyi/' },
    { label: 'Telegram', href: 'https://t.me/anton_kulchytskyi' },
    { label: 'Email', href: `mailto:${email}` },
  ] satisfies Link[],

  about:
    'Full-stack developer with a frontend focus. I build web applications, business platforms and internal tools with React, Next.js and TypeScript, and the backends behind them with Python (FastAPI) and Node.js — REST APIs, databases and real-time features.',

  skills: [
    { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python'] },
    {
      label: 'Frontend',
      items: ['React', 'Next.js', 'Redux', 'React Hook Form', 'Tailwind CSS', 'MUI'],
    },
    { label: 'Backend', items: ['FastAPI', 'Node.js', 'Express', 'REST', 'WebSockets'] },
    {
      label: 'Data & cloud',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS S3', 'Azure Blob'],
    },
  ] satisfies SkillGroup[],

  projects: [
    {
      name: 'OurWay',
      kind: 'Personal project',
      description:
        'Family planner for tasks and daily routines — a web app with its own backend and a Telegram bot.',
      stack: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Telegram Bot API'],
      links: [
        { label: 'Live demo', href: 'https://ourway-frontend.vercel.app/en' },
        { label: 'Frontend', href: 'https://github.com/anton-kulchytskyi/ourway-frontend' },
        { label: 'Backend', href: 'https://github.com/anton-kulchytskyi/ourway-backend' },
        { label: 'Telegram bot', href: 'https://github.com/anton-kulchytskyi/ourway-bot' },
      ],
    },
    {
      name: 'Car Service Book',
      kind: 'Personal project',
      description:
        'Maintenance tracker for vehicles — record and manage service history in one place.',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL (Neon)', 'Vercel'],
      links: [{ label: 'Live demo', href: 'https://car-service-book.vercel.app/en' }],
    },
    {
      name: 'Uplevel Restoration',
      kind: 'Freelance',
      description:
        'Multi-page website for a Canadian restoration company, with reusable layouts and compliance pages.',
      stack: ['Astro', 'HTML', 'CSS', 'JavaScript'],
      links: [
        { label: 'uplevelcorp.ca', href: 'https://uplevelcorp.ca' },
        { label: 'GitHub', href: 'https://github.com/anton-kulchytskyi/uplevel-astro' },
      ],
    },
  ] satisfies Project[],

  contact: {
    heading: 'Let’s talk',
  },

  notFound: {
    heading: 'Not found',
    text: 'This page doesn’t exist or has moved.',
    linkLabel: 'Back to the home page',
  },

  footer: {
    copyrightYear: 2026,
    // Nod to the quote on the first CV site: "I'm still learning" — Michelangelo at 87.
    oldSite: { label: 'Still learning · since 2021', href: 'https://anton-kulchytskyi.github.io/CV/' },
  },
};

/** Extra attributes so external links open in a new tab. */
export function linkAttrs(href: string) {
  return /^https?:\/\//.test(href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
}
