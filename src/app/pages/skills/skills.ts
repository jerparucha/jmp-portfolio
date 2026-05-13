import { Component } from '@angular/core';
import { SKILL_CATEGORIES, SkillCategory } from '../../data/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsPage {
  readonly categories: SkillCategory[] = SKILL_CATEGORIES;
}
