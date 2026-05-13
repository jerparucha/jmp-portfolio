import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS, Project } from '../../data/projects';

@Component({
  selector: 'app-library',
  imports: [RouterLink],
  templateUrl: './library.html',
  styleUrl: './library.scss',
})
export class LibraryPage {
  projects: Project[] = PROJECTS;
}
