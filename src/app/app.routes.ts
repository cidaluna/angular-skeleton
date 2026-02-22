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
  {
    path: 'a',
    loadComponent: () => import('./components/example-card/example-card.component').then(m => m.ExampleCardComponent),
  },
  {
    path: 'b',
    loadComponent: () => import('./components/example-card-b/example-card-b.component').then(m => m.ExampleCardBComponent),
  },
  {
    path: 'd',
    loadComponent: () => import('./components/example-card-d/example-card-d.component').then(m => m.ExampleCardDComponent),
  }
];
