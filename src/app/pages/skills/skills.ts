import { Component } from '@angular/core';
import { SKILL_CATEGORIES, SkillCategory } from '../../data/skills';

const DEVICONS = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const SIMPLEICONS = 'https://cdn.simpleicons.org';

const ICON_MAP: Record<string, string> = {
  // Languages
  'JavaScript':      `${DEVICONS}/javascript/javascript-original.svg`,
  'TypeScript':      `${DEVICONS}/typescript/typescript-original.svg`,
  'SQL':             `${DEVICONS}/azuresqldatabase/azuresqldatabase-original.svg`,
  'C#':              `${DEVICONS}/csharp/csharp-original.svg`,
  'HTML':            `${DEVICONS}/html5/html5-original.svg`,
  'CSS':             `${DEVICONS}/css3/css3-original.svg`,
  // Frameworks & Libraries
  'Angular':         `${DEVICONS}/angular/angular-original.svg`,
  'AngularJS':       `${DEVICONS}/angularjs/angularjs-original.svg`,
  'ASP.NET':         `${DEVICONS}/dotnetcore/dotnetcore-original.svg`,
  // Developer Tools
  'Postman':         `${DEVICONS}/postman/postman-original.svg`,
  'Visual Studio':   `${DEVICONS}/visualstudio/visualstudio-original.svg`,
  'VS Code':         `${DEVICONS}/vscode/vscode-original.svg`,
  // DevOps & Cloud
  'GitHub Actions':  `${DEVICONS}/github/github-original.svg`,
  'Azure DevOps':    `${DEVICONS}/azuredevops/azuredevops-original.svg`,
  'Microsoft Azure': `${DEVICONS}/azure/azure-original.svg`,
  'Cloudflare Pages':`${DEVICONS}/cloudflare/cloudflare-original.svg`,
  // Developer Tools (continued)
  'Application Insights': `${SIMPLEICONS}/applicationinsights`,
  'SSMS':            `${SIMPLEICONS}/ssms`,
  // Automation & ITSM
  'UiPath':          `${SIMPLEICONS}/uipath`,
  'n8n':             `${SIMPLEICONS}/n8n`,
  'ServiceNow':      `${SIMPLEICONS}/servicenow`,
  'BMC Remedy':      `${SIMPLEICONS}/remedy`,
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsPage {
  readonly categories: SkillCategory[] = SKILL_CATEGORIES;
  readonly iconMap = ICON_MAP;
}
