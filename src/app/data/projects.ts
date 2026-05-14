export type ProjectStatus = 'Live' | 'In Progress' | 'Archived';

export interface Project {
  slug: string;
  name: string;
  type: string;
  year: number;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  demo: string | null;
  status: ProjectStatus;
  coverImage?: string;
  logo?: string;
  screenshots?: string[];
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: 'har-analyzer',
    name: 'HAR File Analyzer',
    type: 'Web App',
    year: 2025,
    description: 'Web-based tool for inspecting and analyzing HTTP Archive (HAR) files with waterfall charts, security analysis, and request inspection.',
    longDescription: `A web-based tool for inspecting and analyzing HTTP Archive (HAR) files. Load a HAR file and instantly explore network activity through multiple views.

Features include a summary dashboard with stat cards and donut charts, a waterfall timeline with phase-level color coding, performance analysis with slow-request detection and duplicate request grouping, automated security checks (missing headers, insecure cookies, mixed content, sensitive data in URLs), and a filterable request table with a full request inspector panel.`,
    tags: ['Angular 21', 'Angular Material', 'TypeScript', 'SCSS'],
    github: 'https://github.com/jerparucha/har-analyzer',
    demo: 'https://har-analyzer-jmp.vercel.app/',
    status: 'Live',
    featured: true,
    logo: 'images/projects/har-analyzer-logo.svg',
    coverImage: 'images/projects/har-analyzer/screenshot-2.jpg',
    screenshots: [
      'images/projects/har-analyzer/screenshot-2.jpg',
      'images/projects/har-analyzer/screenshot-7.jpg',
      'images/projects/har-analyzer/screenshot-1.jpg',
      'images/projects/har-analyzer/screenshot-3.jpg',
      'images/projects/har-analyzer/screenshot-8.jpg',
      'images/projects/har-analyzer/screenshot-4.jpg',
      'images/projects/har-analyzer/screenshot-5.jpg',
      'images/projects/har-analyzer/screenshot-6.jpg',
    ],
  },
  {
    slug: 'olj-jd-helper',
    name: 'OLJ JD Helper Extension',
    type: 'Browser Extension',
    year: 2026,
    description: 'Chrome extension that keeps the job description visible in a sidebar while filling application forms on OnlineJobs.ph.',
    longDescription: `A browser extension that solves a common friction point on OnlineJobs.ph — losing sight of the job description when navigating to the application form.

Visit a job posting and the description is automatically saved. Click Apply and a toggle button appears on the form page. Click it to open a sidebar with the full job description alongside the form. Saved descriptions expire after 24 hours. Built with vanilla JavaScript using Chrome's Manifest V3.`,
    tags: ['Chrome Extension', 'JavaScript', 'CSS', 'Manifest V3'],
    github: 'https://github.com/jerparucha/OLJ-JD-Helper-Extension',
    demo: null,
    status: 'Live',
    logo: 'images/projects/olj-jd-helper-logo.svg',
    coverImage: 'images/projects/olj-jd-helper/screenshot-2.png',
    screenshots: [
      'images/projects/olj-jd-helper/screenshot-2.png',
      'images/projects/olj-jd-helper/screenshot-1.png',
      'images/projects/olj-jd-helper/screenshot-3.png',
    ],
  },
];
