import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS, Project } from '../../data/projects';

@Component({
  selector: 'app-library',
  imports: [RouterLink],
  templateUrl: './library.html',
  styleUrl: './library.scss',
})
export class LibraryPage {
  readonly allProjects: Project[] = PROJECTS;

  readonly allTags = [...new Set(PROJECTS.flatMap(p => p.tags))].sort();
  readonly allTypes = [...new Set(PROJECTS.map(p => p.type))].sort();
  readonly allYears = [...new Set(PROJECTS.map(p => p.year))].sort((a, b) => b - a);

  selectedTags = signal<Set<string>>(new Set());
  selectedTypes = signal<Set<string>>(new Set());
  selectedYears = signal<Set<number>>(new Set());

  filteredProjects = computed(() => {
    const tags = this.selectedTags();
    const types = this.selectedTypes();
    const years = this.selectedYears();

    return this.allProjects.filter(p => {
      const tagMatch = tags.size === 0 || p.tags.some(t => tags.has(t));
      const typeMatch = types.size === 0 || types.has(p.type);
      const yearMatch = years.size === 0 || years.has(p.year);
      return tagMatch && typeMatch && yearMatch;
    });
  });

  toggleTag(tag: string) {
    this.selectedTags.update(set => {
      const next = new Set(set);
      next.has(tag) ? next.delete(tag) : next.add(tag);
      return next;
    });
  }

  toggleType(type: string) {
    this.selectedTypes.update(set => {
      const next = new Set(set);
      next.has(type) ? next.delete(type) : next.add(type);
      return next;
    });
  }

  toggleYear(year: number) {
    this.selectedYears.update(set => {
      const next = new Set(set);
      next.has(year) ? next.delete(year) : next.add(year);
      return next;
    });
  }

  clearFilters() {
    this.selectedTags.set(new Set());
    this.selectedTypes.set(new Set());
    this.selectedYears.set(new Set());
  }

  get hasActiveFilters(): boolean {
    return this.selectedTags().size > 0 || this.selectedTypes().size > 0 || this.selectedYears().size > 0;
  }
}
