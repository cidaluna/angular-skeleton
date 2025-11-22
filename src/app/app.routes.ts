import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/user-card/user-card.component').then(m => m.UserCardComponent),
  }
];
