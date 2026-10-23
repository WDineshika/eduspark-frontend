
import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Materials } from './features/materials/materials';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'materials',
    component: Materials
  },
  {
    path: 'materials/:subject',
    component: Materials
  },
  {
    path: '**',
    redirectTo: ''
  }
];
