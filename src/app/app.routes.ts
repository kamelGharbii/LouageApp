import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [
  {
    path: 'home.page',
    pathMatch: 'full',
=======
import { LoginPage } from './pages/login/login.page';

export const routes: Routes = [
  {
    path: 'home',
>>>>>>> 9243be3d9796f2bd8bd79373acb3080d2a3e8813
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
<<<<<<< HEAD
  
=======
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
>>>>>>> 9243be3d9796f2bd8bd79373acb3080d2a3e8813
];
