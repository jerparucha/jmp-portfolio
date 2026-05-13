import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { ExperienceComponent } from '../../components/experience/experience';
import { ContactComponent } from '../../components/contact/contact';

@Component({
  selector: 'app-profile',
  imports: [HeroComponent, AboutComponent, ExperienceComponent, ContactComponent],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfilePage {}
