import { Routes } from '@angular/router';

export const deploymentsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/deployments-page')
        .then(m => m.DeploymentsPage),
  },
];
