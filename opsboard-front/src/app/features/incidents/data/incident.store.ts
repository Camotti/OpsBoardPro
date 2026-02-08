import { signalStore, withState, withMethods } from '@ngrx/signals';
import { Incident } from '../models/incident.model';

interface IncidentsState {
  incidents: Incident[];
  loading: boolean;
}

export const IncidentsStore = signalStore(
  { providedIn: 'root' },
  withState<IncidentsState>({
    incidents: [],
    loading: false,
  }),
  withMethods((store) => ({
    loadIncidents() {
      store.loading.update(() => true);

      setTimeout(() => {
        store.incidents.update(() => [
          {
            id: 'INC-001',
            title: 'API Payments down',
            service: 'payments',
            severity: 'CRITICAL',
            status: 'OPEN',
            createdAt: new Date().toISOString(),
          },
          {
            id: 'INC-002',
            title: 'Latency on Auth Service',
            service: 'auth',
            severity: 'HIGH',
            status: 'IN_PROGRESS',
            createdAt: new Date().toISOString(),
          },
        ]);

        store.loading.update(() => false);
      }, 500);
    },
  }))
);
