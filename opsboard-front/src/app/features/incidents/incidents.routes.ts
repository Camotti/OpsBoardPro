import { Routes } from '@angular/router';

export const incidentsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/incidents-page/incidents-page')
        .then(m => m.IncidentsPage),
  },
];
