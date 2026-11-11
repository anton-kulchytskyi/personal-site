/**
 * All site content lives here. Edit text and URLs in this file only —
 * components just render what they get from it.
 *
 * Anything marked `TODO` is still a placeholder (renders as `#`) and
 * needs a real URL from Anton.
 */

/** Placeholder for links that are not known yet. */
const TODO = '#';

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
    { label: 'GitHub', href: 'https://github.com/anton-kulchytskyi' }, // TODO: confirm
    { label: 'LinkedIn', href: TODO }, // TODO
    { label: 'Telegram', href: TODO }, // TODO
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
        { label: 'Live demo', href: TODO }, // TODO
        { label: 'Frontend', href: TODO }, // TODO: repo
        { label: 'Backend', href: TODO }, // TODO: repo
        { label: 'Telegram bot', href: TODO }, // TODO
      ],
    },
    {
      name: 'Car Service Book',
      kind: 'Personal project',
      // TODO: confirm one-liner ("services, parts and mileage" was a guess)
      description:
        'Maintenance log for vehicles — record services, parts and mileage in one place.',
      stack: ['Next.js', 'TypeScript', 'PostgreSQL (Neon)', 'Vercel'],
      links: [{ label: 'Live demo', href: TODO }], // TODO
    },
    {
      name: 'Uplevel Restoration',
      kind: 'Freelance',
      description:
        'Multi-page website for a Canadian restoration company, with reusable layouts and compliance pages.',
      stack: ['Astro', 'HTML', 'CSS', 'JavaScript'],
      links: [
        { label: 'uplevelcorp.ca', href: 'https://uplevelcorp.ca' },
        { label: 'GitHub', href: TODO }, // TODO: repo
      ],
    },
  ] satisfies Project[],

  contact: {
    heading: 'Let’s talk',
  },

  footer: {
    copyrightYear: 2026,
    oldSite: { label: 'First version · 2021', href: 'https://anton-kulchytskyi.github.io/CV/' },
  },
};
