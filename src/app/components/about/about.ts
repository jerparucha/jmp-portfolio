import { Component } from '@angular/core';
import { ABOUT_BIO, ABOUT_INFO, AboutInfo } from '../../data/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  readonly bio: string[] = ABOUT_BIO;
  readonly info: AboutInfo[] = ABOUT_INFO;
}
