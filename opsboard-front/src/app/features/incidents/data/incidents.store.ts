import {signalStore,withState,withMethods,patchState} from '@ngrx/signals';

export interface Incident {
  id: string;
  title: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  severity: 'LOW' | 'MEDIUM' | 'HIGH';
}

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
      patchState(store, { loading: true });

      setTimeout(() => {
        patchState(store, {
          incidents: [
            {
              id: '1',
              title: 'API down',
              status: 'OPEN',
              severity: 'HIGH',
            },
            {
              id: '2',
              title: 'Latency spike',
              status: 'IN_PROGRESS',
              severity: 'MEDIUM',
            },
          ],
          loading: false,
        });
      }, 500);
    },
  }))
);