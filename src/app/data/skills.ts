export interface SkillCategory {
  name: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'SQL', 'C#', 'VB.Net', 'KQL', 'HTML', 'CSS'],
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['Angular', 'AngularJS', 'ASP.NET'],
  },
  {
    name: 'Developer Tools',
    skills: ['Postman', 'Browser DevTools', 'Application Insights', 'SSMS', 'Visual Studio', 'VS Code'],
  },
  {
    name: 'DevOps & Cloud',
    skills: ['GitHub Actions', 'Azure DevOps', 'Microsoft Azure', 'Cloudflare Pages'],
  },
  {
    name: 'Automation & ITSM',
    skills: ['Blue Prism', 'UiPath', 'n8n', 'ServiceNow', 'BMC Remedy'],
  },
];
