import { signalStore, withState, withMethods } from '@ngrx/signals';
import { DashboardKpi } from '../models/dashboard-kpi.model';

interface DashboardState {
  kpis: DashboardKpi | null;
  loading: boolean;
}

export const DashboardStore = signalStore(
  { providedIn: 'root' },

  withState<DashboardState>({
    kpis: null,
    loading: false,
  }),

  withMethods((store: any) => ({
    loadKpis() {
      store.loading.set(true);

      setTimeout(() => {
        store.kpis.set({
          openIncidents: 12,
          inProgressIncidents: 5,
          resolvedToday: 8,
          slaBreached: 1,
        });

        store.loading.set(false);
      }, 500);
    },
  }))
);
