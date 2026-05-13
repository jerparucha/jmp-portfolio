import { Component } from '@angular/core';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  items: ExperienceItem[] = [
    {
      role: 'Technical Support Analyst',
      company: 'Aprimo',
      period: 'April 2025 – April 2026',
      bullets: [
        'Closed 187 tickets in 1 year, accounting for 8.4% of total inbound across a team of 21 analysts, with 0 SLA breaches.',
        'Created 13 SQL and 6 KQL queries added to the team query repository used by Product Support, Engineering, and the Product Team.',
        'Created 33 Knowledge Articles used across all users.',
        'Escalated 27 bugs and coordinated directly with Product and Engineering teams on investigations involving codebase references, data integrity, and UI functionality.',
        'Utilized Browser DevTools, HAR file analysis, Postman, and Application Insights to investigate network, frontend, and API-related tickets.',
        'Part of the weekend on-call support team.',
      ],
    },
    {
      role: 'Associate Software Engineer',
      company: 'Accenture',
      period: 'September 2023 – April 2025',
      bullets: [
        'Developed dynamic SQL scripts which lowered bug resolution time by at least 75%.',
        'Developed and enhanced stored procedures to increase performance by at least 50%.',
        'Developed 3 Blue Prism automation bots for daily recurring tasks, reducing user effort from 75% to 100%.',
        'Created System Understanding Documents for applications using VB.Net and T-SQL Stored Procedures.',
        'Conducted knowledge transfer and mentored junior resources.',
        'Provided status reports and updates to onshore and client leads during offshore hours.',
      ],
    },
    {
      role: 'Application Developer Intern',
      company: 'Accenture',
      period: 'February 2023 – May 2023',
      bullets: [
        'Fixed bugs and enhanced application features using HTML, CSS, JavaScript, AngularJS, Node.js, Microsoft SQL, and REST API, which lowered the backlog by 33%.',
        'Performed manual testing of features and created test designs to ensure quality and identify issues.',
        'Created comprehensive documentation of the application, including technical specifications and user guides.',
      ],
    },
  ];
}
