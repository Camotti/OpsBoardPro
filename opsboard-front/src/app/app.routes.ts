import { Routes } from '@angular/router';
import { AppShellComponent } from './layouts/app-shell/app-shell.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes')
        .then(m => m.authRoutes),
  },

  {
    path: '',
    component: AppShellComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes')
            .then(m => m.dashboardRoutes),
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },

    {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes').then(m => m.adminRoutes),
  },

  {
    path: 'audit',
    loadChildren: () =>
      import('./features/audit/audit.routes').then(m => m.auditRoutes),
  },

  {
  path: 'incidents',
  loadChildren: () =>
    import('./features/incidents/incidents.routes')
      .then(m => m.incidentsRoutes),
},

];
