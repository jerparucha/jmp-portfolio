import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetailPage {
  private router = inject(Router);
  private titleService = inject(Title);

  slug = input<string>('');
  activeTab = signal<'overview' | 'screenshots' | 'tech'>('overview');
  selectedScreenshot = signal<string | null>(null);

  project = computed(() => PROJECTS.find(p => p.slug === this.slug()) ?? null);

  constructor() {
    effect(() => {
      const p = this.project();
      if (p) {
        this.titleService.setTitle(`${p.name} — Jerome Mari Parucha`);
        this.activeTab.set('overview');
        this.selectedScreenshot.set(p.screenshots?.[0] ?? null);
      } else if (this.slug()) {
        this.router.navigate(['/library']);
      }
    });
  }
}
