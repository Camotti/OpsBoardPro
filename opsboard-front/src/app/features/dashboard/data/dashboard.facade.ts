import { inject, Injectable } from '@angular/core';
import { DashboardStore } from './dashboard.store';

@Injectable({ providedIn: 'root' })
export class DashboardFacade {
  private store = inject(DashboardStore);

  kpis$ = this.store.kpis;
  loading$ = this.store.loading;

  load() {
    this.store.loadKpis();
  }
}
