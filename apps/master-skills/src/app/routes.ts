import { ImportedNgModuleProviders, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('./pages/notifications/notifications.component').then(
        (mod) => mod.NotificationsComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (mod) => mod.NotFoundComponent
      ),
  },
];

export const routingRootProvider = (): ImportedNgModuleProviders =>
  importProvidersFrom(RouterModule.forRoot(routes));
