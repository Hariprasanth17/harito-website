import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Signup } from './component/signup/signup';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./component/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./component/about/about').then(m => m.About)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./component/contact/contact').then(m => m.Contact)
  },
  {
    path: 'todo',
    loadComponent: () =>
      import('./component/todo/todo').then(m => m.Todo)
  },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },

  { path: '**', redirectTo: 'home' }
];
