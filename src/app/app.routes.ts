import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/profile/profile').then(m => m.ProfilePage),
  },
  {
    path: 'library',
    loadComponent: () => import('./pages/library/library').then(m => m.LibraryPage),
    children: [
      {
        path: '',
        title: 'Library',
        loadComponent: () => import('./pages/library/library-grid/library-grid').then(m => m.LibraryGridPage),
      },
      {
        path: ':slug',
        loadComponent: () => import('./pages/project-detail/project-detail').then(m => m.ProjectDetailPage),
      },
    ],
  },
  {
    path: 'skills',
    title: 'Skills',
    loadComponent: () => import('./pages/skills/skills').then(m => m.SkillsPage),
  },
  {
    path: 'guide',
    title: 'Guide',
    loadComponent: () => import('./pages/guide/guide').then(m => m.GuidePage),
  },
  {
    path: '**',
    title: '404 — Page Not Found',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFoundPage),
  },
];
