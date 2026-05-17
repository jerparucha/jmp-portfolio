import { Component, computed, effect, HostListener, inject, input, signal } from '@angular/core';
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
  lightboxOpen = signal(false);

  project = computed(() => PROJECTS.find(p => p.slug === this.slug()) ?? null);
  screenshots = computed(() => this.project()?.screenshots ?? []);
  selectedIndex = computed(() => {
    const idx = this.screenshots().indexOf(this.selectedScreenshot() ?? '');
    return idx >= 0 ? idx : 0;
  });

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

  prev() {
    const shots = this.screenshots();
    if (!shots.length) return;
    const i = (this.selectedIndex() - 1 + shots.length) % shots.length;
    this.selectedScreenshot.set(shots[i]);
  }

  next() {
    const shots = this.screenshots();
    if (!shots.length) return;
    const i = (this.selectedIndex() + 1) % shots.length;
    this.selectedScreenshot.set(shots[i]);
  }

  openLightbox() { this.lightboxOpen.set(true); }
  closeLightbox() { this.lightboxOpen.set(false); }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (!this.lightboxOpen()) return;
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
}
