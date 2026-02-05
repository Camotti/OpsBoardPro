import { Routes } from '@angular/router';
import { AppShellComponent } from './layouts/app-shell/app-shell.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

    {
        path: '',
        component: AppShellComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                import('./features/dashboard/dashboard.routes')
                    .then(m => m.dashboardRoutes),
            },

            {
                path: 'auth',
                loadChildren: () => 
                    import('./features/auth/auth.routes').then(m => m.authRoutes),
            },

            {
                path: '',
                loadComponent: ()=> 
                    import('./layouts/app-shell/app-shell.component').then(m => m.AppShellComponent),
                canActivate: [authGuard],
                children: [
                    {
                        path: 'dashboard',
                        loadChildren: ()=> 
                            import('./features/dashboard/dashboard.routes').then(m => m.dashboardRoutes),
                    },
                ],
            },
        ],
    },
];
