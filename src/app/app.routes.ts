import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/profile/profile').then(m => m.ProfilePage),
  },
  {
    path: 'library',
    title: 'Library',
    loadComponent: () => import('./pages/library/library').then(m => m.LibraryPage),
  },
  {
    path: 'library/:slug',
    loadComponent: () => import('./pages/project-detail/project-detail').then(m => m.ProjectDetailPage),
  },
  {
    path: 'skills',
    title: 'Skills',
    loadComponent: () => import('./pages/skills/skills').then(m => m.SkillsPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
