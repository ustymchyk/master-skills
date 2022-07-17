import { ImportedNgModuleProviders, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts';

export const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((mod) => mod.HomeComponent),
      },
      {
        path: 'history',
        loadComponent: () => import('./pages/history/history.component').then((mod) => mod.HistoryComponent),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((mod) => mod.NotFoundComponent),
  },
];

export const routingRootProvider = (): ImportedNgModuleProviders => importProvidersFrom(RouterModule.forRoot(routes));
