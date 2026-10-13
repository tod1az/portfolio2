/**
 * All portfolio content lives here. Panels only render what they find in this file.
 */

export const PROFILE = {
  name: 'Tomás Díaz',
  firstName: 'Tomás',
  handle: 'tod1az',
  initials: 'TD',
  role: 'Full Stack Web Developer',
  location: 'Chile',
  timezone: 'UTC-3 / CHILE (OPEN TO REMOTE)',
  availability: 'OPEN TO WORK',
  languages: ['Español', 'English'],
  intro:
    "Hi! My name is Tomás, Full Stack Web Developer. Let's turn your ideas into digital products that make a difference.",
} as const

/** Social / contact links. Entries with an empty href are hidden until filled in. */
export const LINKS = [
  { kind: 'GIT', label: 'GITHUB', href: 'https://github.com/tod1az' },
  { kind: 'NET', label: 'LINKEDIN', href: '' }, // TODO: add LinkedIn profile URL
  { kind: 'DIRECT', label: 'EMAIL', href: '' }, // TODO: add mailto: address
] as const

export interface Experience {
  title: string
  organization: string
  kind: 'work' | 'education'
  date: string
  description: string
  tags: string[]
}

/** Newest first. */
export const EXPERIENCE: Experience[] = [
  {
    title: 'Programming & Systems Analysis Technician',
    organization: 'AIEP',
    kind: 'education',
    date: '2025',
    description: 'Graduated from the Programming and Systems Analysis Technician program.',
    tags: [],
  },
  {
    title: 'GZ Ecuestre',
    organization: 'Freelance',
    kind: 'work',
    date: '2023 - 2024',
    description:
      'Built from scratch a site for the sale of equestrian horses using Next.js 14, Shadcn for the design and a PostgreSQL database hosted on Supabase.',
    tags: ['Next.js 14', 'Shadcn', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Bootcamp Graduate',
    organization: 'Henry Bootcamp',
    kind: 'education',
    date: '2023',
    description: 'Graduated as a Full Stack Developer specialized in JavaScript after four months of study.',
    tags: ['JavaScript'],
  },
  {
    title: 'Artify',
    organization: 'Henry Bootcamp',
    kind: 'work',
    date: '2023',
    description:
      'Group project putting into practice what I learned at the Soy Henry bootcamp. I also learned Gitflow and technologies such as Next.js and Tailwind.',
    tags: ['Next.js', 'Tailwind', 'Gitflow'],
  },
  {
    title: 'Henry Food',
    organization: 'Henry Bootcamp',
    kind: 'work',
    date: '2023',
    description: 'Individual project putting into practice the knowledge I acquired at the Soy Henry bootcamp.',
    tags: [],
  },
]

export interface Project {
  title: string
  /** Short label shown in the "MAP" badge. */
  category: string
  /** Shown top-right of the card. */
  stack: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  /** Optional screenshot (import from src/assets). */
  image?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Venganza de Samael',
    category: 'ORDER MANAGEMENT',
    stack: 'React + Flask',
    description: 'Order management application for a screen-printing supplies shop.',
    tags: ['React', 'Python', 'Flask', 'JWT', 'Shadcn UI', 'Zustand'],
    liveUrl: 'https://venganza-de-samael.vercel.app/',
  },
  {
    title: 'Artify',
    category: 'E-COMMERCE',
    stack: 'Next.js',
    description:
      'E-commerce platform for handicraft articles where users can sell or buy products, with features such as reviews and product ratings.',
    tags: ['React', 'Redux Toolkit', 'Next.js', 'Tailwind', 'Prisma'],
    repoUrl: 'https://github.com/ignaciocenni/artify',
  },
  {
    title: 'GZ Ecuestre',
    category: 'CATALOG',
    stack: 'Next.js 14',
    description:
      'Catalog for buying and selling equestrian horses: a landing page, a page with the horse catalog and a detail page for each horse.',
    tags: ['React', 'Next.js', 'Tailwind', 'Prisma', 'Supabase', 'Shadcn'],
    repoUrl: 'https://github.com/tod1az/gzecuestre',
  },
]

export interface SkillGroup {
  /** Short name used in the attribute meters. */
  name: string
  /** Park-piece themed heading used in the stack grid. */
  title: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'FRONTEND',
    title: 'RAMPS // FRONTEND',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux'],
  },
  {
    name: 'BACKEND',
    title: 'RAILS // BACKEND',
    items: ['Node.js', 'Express', 'Python', 'Flask'],
  },
  {
    name: 'DATA',
    title: 'HALFPIPE // DATA',
    items: ['PostgreSQL', 'Prisma', 'Supabase'],
  },
  {
    name: 'UI & TOOLING',
    title: 'DECALS // UI & TOOLING',
    items: ['Tailwind', 'Shadcn', 'Framer Motion', 'Git'],
  },
]

/** "Special tricks": combos pulled from the stacks actually used in the projects above. */
export const SPECIAL_TRICKS = [
  { name: 'FULL STACK FLIP', combo: 'REACT + NODE + POSTGRESQL' },
  { name: 'NEXT.JS 14 GRIND', combo: 'APP ROUTER + PRISMA + SUPABASE' },
  { name: 'PYTHON BACKSIDE', combo: 'FLASK + JWT' },
  { name: 'BILINGUAL MANUAL', combo: 'ESPAÑOL + ENGLISH' },
] as const
