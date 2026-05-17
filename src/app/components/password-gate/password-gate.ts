import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

const STORAGE_KEY = 'jmp_authorized';

@Component({
  selector: 'app-password-gate',
  imports: [FormsModule],
  templateUrl: './password-gate.html',
  styleUrl: './password-gate.scss',
})
export class PasswordGateComponent {
  authorized = output<void>();

  input = signal('');
  error = signal(false);

  submit() {
    if (this.input() === environment.passwordGate) {
      localStorage.setItem(STORAGE_KEY, 'true');
      this.authorized.emit();
    } else {
      this.error.set(true);
      this.input.set('');
    }
  }
}
