import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { Deployment } from '../models/deployment.model';

interface DeploymentsState {
  deployments: Deployment[];
  loading: boolean;
}

export const DeploymentsStore = signalStore(
  { providedIn: 'root' },

  withState<DeploymentsState>({
    deployments: [],
    loading: false,
  }),

  withMethods((store) => ({
    loadDeployments() {
      patchState(store, { loading: true });

      setTimeout(() => {
        patchState(store, {
          deployments: [
            {
              id: '1',
              service: 'auth-service',
              version: 'v1.2.0',
              status: 'SUCCESS',
              createdAt: new Date().toISOString(),
            },
            {
              id: '2',
              service: 'payments-service',
              version: 'v2.0.1',
              status: 'RUNNING',
              createdAt: new Date().toISOString(),
            },
            {
              id: '3',
              service: 'notifications',
              version: 'v1.0.5',
              status: 'PENDING',
              createdAt: new Date().toISOString(),
            },
          ],
          loading: false,
        });
      }, 500);
    },
  }))
);