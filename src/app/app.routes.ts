import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'admin-user-list',
    loadComponent: () => import('./admin-users/admin-user-list/admin-user-list.page').then( m => m.AdminUserListPage)
  },
  {
    path: 'admin-user-form',
    loadComponent: () => import('./admin-users/admin-user-form/admin-user-form.page').then( m => m.AdminUserFormPage)
  },
  {
    path: 'admin/users',
    loadComponent: () =>
      import('./admin-users/admin-user-list/admin-user-list.page').then(
        (m) => m.AdminUserListPage
      )
  },
  {
    path: 'admin/users/new',
    loadComponent: () =>
      import('./admin-users/admin-user-form/admin-user-form.page').then(
        (m) => m.AdminUserFormPage
      )
  },
  {
    path: 'admin/users/edit/:id',
    loadComponent: () =>
      import('./admin-users/admin-user-form/admin-user-form.page').then(
        (m) => m.AdminUserFormPage
      )
  }
];
