import { Injectable, computed, signal } from '@angular/core';
import { PROJECTS, Project } from '../data/projects';

type SortKey = 'year' | 'name';

@Injectable({ providedIn: 'root' })
export class LibraryStateService {
  readonly allProjects: Project[] = PROJECTS;
  readonly allTags = [...new Set(PROJECTS.flatMap(p => p.tags))].sort();
  readonly allTypes = [...new Set(PROJECTS.map(p => p.type))].sort();
  readonly allYears = [...new Set(PROJECTS.map(p => p.year))].sort((a, b) => b - a);

  searchQuery = signal('');
  sortBy = signal<SortKey>('year');
  selectedTags = signal<Set<string>>(new Set());
  selectedTypes = signal<Set<string>>(new Set());
  selectedYears = signal<Set<number>>(new Set());

  filteredProjects = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const tags = this.selectedTags();
    const types = this.selectedTypes();
    const years = this.selectedYears();
    const sort = this.sortBy();

    return this.allProjects
      .filter(p => {
        const searchMatch = !query ||
          p.name.toLowerCase().includes(query) ||
          p.type.toLowerCase().includes(query) ||
          p.tags.some(t => t.toLowerCase().includes(query));
        const tagMatch = tags.size === 0 || p.tags.some(t => tags.has(t));
        const typeMatch = types.size === 0 || types.has(p.type);
        const yearMatch = years.size === 0 || years.has(p.year);
        return searchMatch && tagMatch && typeMatch && yearMatch;
      })
      .sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : b.year - a.year);
  });

  groupedProjects = computed(() => {
    const groups = new Map<string, Project[]>();
    for (const p of this.filteredProjects()) {
      if (!groups.has(p.type)) groups.set(p.type, []);
      groups.get(p.type)!.push(p);
    }
    return groups;
  });

  get hasActiveFilters(): boolean {
    return this.searchQuery().trim().length > 0 ||
      this.selectedTags().size > 0 ||
      this.selectedTypes().size > 0 ||
      this.selectedYears().size > 0;
  }

  toggleTag(tag: string) {
    this.selectedTags.update(set => { const n = new Set(set); n.has(tag) ? n.delete(tag) : n.add(tag); return n; });
  }
  toggleType(type: string) {
    this.selectedTypes.update(set => { const n = new Set(set); n.has(type) ? n.delete(type) : n.add(type); return n; });
  }
  toggleYear(year: number) {
    this.selectedYears.update(set => { const n = new Set(set); n.has(year) ? n.delete(year) : n.add(year); return n; });
  }
  clearFilters() {
    this.searchQuery.set('');
    this.selectedTags.set(new Set());
    this.selectedTypes.set(new Set());
    this.selectedYears.set(new Set());
  }
}
