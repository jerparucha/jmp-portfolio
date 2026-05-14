import { Component } from '@angular/core';
import { EXPERIENCE, ExperienceItem } from '../../data/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  readonly items: ExperienceItem[] = EXPERIENCE;
}
