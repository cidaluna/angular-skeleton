import { Routes } from '@angular/router';
import { HostCardComponent } from './components/host-card/host-card.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/host-card/host-card.component').then(m => m.HostCardComponent),
  },
  {
    path: 'user',
    loadComponent: () => import('./components/user-card/user-card.component').then(m => m.UserCardComponent),
  },
];
