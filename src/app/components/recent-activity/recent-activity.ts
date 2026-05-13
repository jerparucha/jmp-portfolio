import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface RecentProject {
  slug: string;
  name: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-recent-activity',
  imports: [RouterLink],
  templateUrl: './recent-activity.html',
  styleUrl: './recent-activity.scss',
})
export class RecentActivityComponent {
  projects: RecentProject[] = [
    {
      slug: 'har-analyzer',
      name: 'HAR File Analyzer',
      description: 'Web-based tool for inspecting HTTP Archive files with waterfall charts, security analysis, and request inspection.',
      tags: ['Angular 21', 'Angular Material', 'SCSS'],
    },
    {
      slug: 'olj-jd-helper',
      name: 'OLJ JD Helper Extension',
      description: 'Chrome extension that keeps the job description visible in a sidebar while filling application forms on OnlineJobs.ph.',
      tags: ['Chrome Extension', 'JavaScript', 'CSS'],
    },
  ];
}
