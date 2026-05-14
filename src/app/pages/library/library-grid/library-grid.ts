import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KeyValuePipe } from '@angular/common';
import { LibraryStateService } from '../../../services/library-state.service';

type ViewMode = 'grid' | 'list';

@Component({
  selector: 'app-library-grid',
  imports: [RouterLink, KeyValuePipe],
  templateUrl: './library-grid.html',
  styleUrl: './library-grid.scss',
})
export class LibraryGridPage {
  viewMode = signal<ViewMode>('grid');

  constructor(public state: LibraryStateService) {}
}
