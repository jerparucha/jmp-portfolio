import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { ExperienceComponent } from '../../components/experience/experience';
import { ContactComponent } from '../../components/contact/contact';
import { RecentActivityComponent } from '../../components/recent-activity/recent-activity';
import { ProfileStatsComponent } from '../../components/profile-stats/profile-stats';
import { PROJECTS } from '../../data/projects';
import { SKILL_CATEGORIES } from '../../data/skills';

@Component({
  selector: 'app-profile',
  imports: [RouterLink, HeroComponent, AboutComponent, ExperienceComponent, ContactComponent, RecentActivityComponent, ProfileStatsComponent],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfilePage {
  readonly featuredProjects = PROJECTS.filter(p => p.featured);
  readonly skillCategories = SKILL_CATEGORIES;
}
