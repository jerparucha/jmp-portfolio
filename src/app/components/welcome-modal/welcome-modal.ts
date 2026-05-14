import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

const STORAGE_KEY = 'jmp_welcome_seen';

@Component({
  selector: 'app-welcome-modal',
  imports: [RouterLink],
  templateUrl: './welcome-modal.html',
  styleUrl: './welcome-modal.scss',
})
export class WelcomeModalComponent {
  visible = signal(localStorage.getItem(STORAGE_KEY) !== 'true');
  dontShow = signal(false);

  dismiss() {
    if (this.dontShow()) {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
    this.visible.set(false);
  }
}
