import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/pages/dashboard-page').then(
        m => m.DashboardPage
      ),
  },
];
