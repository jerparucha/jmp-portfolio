import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  emailCopied = signal(false);

  async copyEmail() {
    await navigator.clipboard.writeText('jerparucha@gmail.com');
    this.emailCopied.set(true);
    setTimeout(() => this.emailCopied.set(false), 2000);
  }
}
