import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home.page',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  
];
