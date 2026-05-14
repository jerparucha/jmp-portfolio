import { Component, signal } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  showResume = signal(false);

  constructor(private location: Location) {}

  openResume() {
    this.showResume.set(true);
    this.location.go('/resume');
  }

  closeResume() {
    this.showResume.set(false);
    this.location.go('/');
  }
}
