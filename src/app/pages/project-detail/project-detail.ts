import { Component, computed, effect, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetailPage {
  private router = inject(Router);

  slug = input<string>('');

  project = computed(() => PROJECTS.find(p => p.slug === this.slug()) ?? null);

  constructor() {
    effect(() => {
      if (this.slug() && !this.project()) {
        this.router.navigate(['/library']);
      }
    });
  }
}
