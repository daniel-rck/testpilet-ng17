import { Routes } from '@angular/router';

const baseRoute = 'foo';

export const routes: Routes = [
  {
    path: 'foo/one',
    loadComponent: () => import('./pages/first/first.component').then(m => m.FirstPageComponent)
  },
  {
    path: 'foo/two',
    loadComponent: () => import('./pages/second/second.component').then(m => m.SecondPageComponent)
  },
  {
    path: 'foo/three',
    loadComponent: () => import('./pages/third/third.component').then(m => m.ThirdComponent)
  },
  {
    path: `${baseRoute}`,
    redirectTo: `${baseRoute}/one`,
    pathMatch: 'full'
  },
  {
    path: `${baseRoute}/**`,
    redirectTo: `${baseRoute}/one`,
    pathMatch: 'full'
  }
];
