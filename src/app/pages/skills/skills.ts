import { Component } from '@angular/core';
import { SKILL_CATEGORIES, SkillCategory } from '../../data/skills';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const ICON_MAP: Record<string, string> = {
  'JavaScript':      `${CDN}/javascript/javascript-original.svg`,
  'TypeScript':      `${CDN}/typescript/typescript-original.svg`,
  'C#':              `${CDN}/csharp/csharp-original.svg`,
  'HTML':            `${CDN}/html5/html5-original.svg`,
  'CSS':             `${CDN}/css3/css3-original.svg`,
  'Angular':         `${CDN}/angular/angular-original.svg`,
  'AngularJS':       `${CDN}/angularjs/angularjs-original.svg`,
  'ASP.NET':         `${CDN}/dotnetcore/dotnetcore-original.svg`,
  'GitHub Actions':  `${CDN}/github/github-original.svg`,
  'Azure DevOps':    `${CDN}/azuredevops/azuredevops-original.svg`,
  'Microsoft Azure': `${CDN}/azure/azure-original.svg`,
  'VS Code':         `${CDN}/vscode/vscode-original.svg`,
  'Visual Studio':   `${CDN}/visualstudio/visualstudio-original.svg`,
  'Postman':         `${CDN}/postman/postman-original.svg`,
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
