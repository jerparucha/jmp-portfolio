import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav';
import { PasswordGateComponent } from './components/password-gate/password-gate';
import { animate, query, style, transition, trigger } from '@angular/animations';

const STORAGE_KEY = 'jmp_authorized';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, PasswordGateComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(8px)' }),
          animate('180ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class App {
  isAuthorized = signal(localStorage.getItem(STORAGE_KEY) === 'true');

  onAuthorized() {
    this.isAuthorized.set(true);
  }

  getRouteState(outlet: RouterOutlet): string {
    if (!outlet.isActivated) return '';
    const url = outlet.activatedRoute.snapshot.url;
    return url.length > 0 ? url[0].path : 'home';
  }
}
