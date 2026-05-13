import { Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  private titleService = inject(Title);

  slug = input<string>('');

  project = computed(() => PROJECTS.find(p => p.slug === this.slug()) ?? null);

  constructor() {
    effect(() => {
      const p = this.project();
      if (p) {
        this.titleService.setTitle(`${p.name} — Jerome Mari Parucha`);
      } else if (this.slug()) {
        this.router.navigate(['/library']);
      }
    });
  }
}
