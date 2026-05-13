import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';

@Component({
  selector: 'app-profile',
  imports: [HeroComponent, AboutComponent],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfilePage {}
