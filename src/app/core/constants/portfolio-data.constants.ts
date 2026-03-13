import { Project, Experience, SkillCategory, ContactInfo, SocialLink, HeroStat } from '../models';

export const NAV_SECTIONS: { id: string; label: string; isHire?: boolean }[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Exp' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Hire Me', isHire: true },
];

export const HERO_STATS: HeroStat[] = [
  { value: '6+', label: 'Months Exp' },
  { value: '5+', label: 'Projects' },
  { value: '10+', label: 'Technologies' },
  { value: '20+', label: 'Hours/Week' },
];

export const MARQUEE_ITEMS: string[] = [
  '.NET CORE',
  'POSTGRESQL',
  'ANGULAR',
  'REST API',
  'EF CORE',
  'DOCKER',
  'AZURE',
  'REDIS',
  'SIGNALR',
  'JWT AUTH',
  'MICROSERVICES',
];

export const ABOUT_CHIPS: string[] = [
  '☕ Chai Addict',
  '🚗 Car Nerd',
  '📚 Book Reader',
  '🔧 Backend First',
  '🌐 Open to Remote',
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Appointment Management System',
    description:
      'End-to-end hospital scheduling platform for doctors and patients. Real-time booking, JWT-secured APIs, and a PostgreSQL-backed data model that cut patient wait times dramatically.',
    imageUrl: 'assets/ams.jpg',
    fallbackImageUrl:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80',
    stack: ['.NET Core', 'EF Core', 'PostgreSQL', 'ReactJS', 'JWT', 'ASP.NET Identity'],
    links: [
      {
        label: '⚡ GitHub',
        url: 'https://github.com/valiyaparth/Appointment-Management-System',
        type: 'github',
      },
    ],
    isFeatured: true,
  },
  {
    id: 2,
    title: 'BookVerse',
    description:
      'Online bookstore built with .NET Core MVC using Onion Architecture, Repository Pattern, and DI. Full auth, product listing, and checkout.',
    imageUrl: 'assets/bookverse.jpg',
    fallbackImageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    stack: ['.NET MVC', 'Identity', 'SQL Server', 'Bootstrap'],
    links: [
      {
        label: '⚡ GitHub',
        url: 'https://github.com/valiyaparth/BookVerse',
        type: 'github',
      },
    ],
    isFeatured: false,
  },
  {
    id: 3,
    title: 'KJ Enterprise',
    description:
      'Angular + Tailwind CSS web app for a local business. Clean Angular Material UI, fully responsive, live on Vercel.',
    imageUrl: 'https://parthvaliya.vercel.app/assets/images/parthcreation(1).png',
    fallbackImageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    stack: ['Angular', 'Tailwind', 'Ang. Material'],
    links: [
      {
        label: '⚡ GitHub',
        url: 'https://github.com/valiyaparth/KJ-Enterprise',
        type: 'github',
      },
      {
        label: '🚀 Live',
        url: 'https://kjenterprise.vercel.app/',
        type: 'live',
      },
    ],
    isFeatured: false,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    dateRange: 'May 2025 – June 2025',
    company: 'Master Technolabs',
    location: 'Surat, India',
    role: 'Backend Developer',
    points: [
      'Built RESTful APIs with .NET Core Web API + EF Core',
      'Designed PostgreSQL schemas for healthcare data models',
      'Collaborated across frontend, QA, and product teams',
      'Reduced patient wait time through workflow automation',
    ],
    tags: ['.NET Core', 'EF Core', 'PostgreSQL', 'REST API'],
  },
  {
    dateRange: 'Jan – Dec 2024',
    company: 'IEEE BVM',
    location: 'Anand, India',
    role: 'Webmaster',
    points: [
      'Upgraded and maintained the IEEE BVM Student Branch website',
      'Organised events, workshops, and technical seminars',
      'Mentored incoming committee members',
    ],
    tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['C#', 'JavaScript', 'TypeScript', 'PHP', 'Java', 'HTML / CSS', 'C++'],
  },
  {
    title: 'Frameworks',
    items: ['.NET Core', 'EF Core', 'Angular', 'SignalR', 'Tailwind', 'Bootstrap', 'jQuery'],
  },
  {
    title: 'Tools & DBs',
    items: ['PostgreSQL', 'SQL Server', 'MySQL', 'Redis', 'Git / GitHub', 'Postman', 'Swagger'],
  },
  {
    title: 'Learning ↑',
    items: ['Docker', 'Azure', 'Microservices'],
  },
];

export const CONTACT_INFO_ITEMS: ContactInfo[] = [
  { icon: '📧', label: 'Email', value: 'valiyaparth1407@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 9265232388' },
  { icon: '📍', label: 'Location', value: 'Ahmedabad, Gujarat, India' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    url: 'https://github.com/valiyaparth',
    title: 'GitHub',
    icon: 'svg',
    svgPath:
      'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
  },
  {
    url: 'https://www.linkedin.com/in/parthvaliya',
    title: 'LinkedIn',
    icon: 'svg',
    svgPath:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    url: 'https://leetcode.com/u/Parthvaliya/',
    title: 'LeetCode',
    icon: '🧩',
  },
  {
    url: 'mailto:valiyaparth1407@gmail.com',
    title: 'Email',
    icon: '✉️',
  },
];

export const FOOTER_LINKS: { label: string; url: string }[] = [
  { label: 'GitHub', url: 'https://github.com/valiyaparth' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/parthvaliya' },
  { label: 'Email', url: 'mailto:valiyaparth1407@gmail.com' },
];
