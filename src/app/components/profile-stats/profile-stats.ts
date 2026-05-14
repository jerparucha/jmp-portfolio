import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects';
import { SKILL_CATEGORIES } from '../../data/skills';
import { CERTIFICATIONS } from '../../data/certifications';

@Component({
  selector: 'app-profile-stats',
  templateUrl: './profile-stats.html',
  styleUrl: './profile-stats.scss',
  imports: [RouterLink],
})
export class ProfileStatsComponent {
  readonly projectCount = PROJECTS.length;
  readonly techCount = SKILL_CATEGORIES.reduce((sum, cat) => sum + cat.skills.length, 0);
  readonly certCount = CERTIFICATIONS.length;
  readonly experienceYears = Math.floor(
    (Date.now() - new Date(2023, 1, 1).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
  );
}
