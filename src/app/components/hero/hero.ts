import { Component, HostListener, inject, signal } from '@angular/core';
import { Location } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  showResume = signal(false);
  moreOpen = signal(false);
  linkCopied = signal(false);

  private location = inject(Location);
  protected notifications = inject(NotificationService);

  openResume() {
    this.showResume.set(true);
    this.location.go('/resume');
    this.notifications.notify('resume_viewed');
  }

  closeResume() {
    this.showResume.set(false);
    this.location.go('/');
  }

  toggleMore() {
    this.moreOpen.update(v => !v);
  }

  async copyLink() {
    await navigator.clipboard.writeText(window.location.origin);
    this.linkCopied.set(true);
    this.moreOpen.set(false);
    setTimeout(() => this.linkCopied.set(false), 2000);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (!target.closest('.hero__more-wrapper')) {
      this.moreOpen.set(false);
    }
  }
}
