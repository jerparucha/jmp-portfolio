import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-recent-activity',
  imports: [RouterLink],
  templateUrl: './recent-activity.html',
  styleUrl: './recent-activity.scss',
})
export class RecentActivityComponent {
  readonly projects = PROJECTS;
}
