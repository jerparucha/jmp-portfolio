import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LibraryStateService } from '../../services/library-state.service';

@Component({
  selector: 'app-library',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FormsModule],
  templateUrl: './library.html',
  styleUrl: './library.scss',
})
export class LibraryPage {
  filterPanelOpen = signal(false);

  constructor(public state: LibraryStateService) {}
}
