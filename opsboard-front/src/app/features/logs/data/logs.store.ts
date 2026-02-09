import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { LogEntry } from '../models/log-entry.model';

interface LogsState {
  logs: LogEntry[];
  streaming: boolean;
}

export const LogsStore = signalStore(
  { providedIn: 'root' },

  withState<LogsState>({
    logs: [],
    streaming: false,
  }),

  withMethods((store) => {
    let intervalId: ReturnType<typeof setInterval> | null = null;

    return {
      startStream() {
        // Evitar múltiples streams simultáneos
        if (store.streaming()) return;

        patchState(store, { streaming: true });

        intervalId = setInterval(() => {
          const newLog: LogEntry = {
            id: crypto.randomUUID(),
            level: 'INFO',
            message: 'Simulated log entry',
            service: 'api-gateway',
            timestamp: new Date().toISOString(),
          };

          patchState(store, {
            logs: [newLog, ...store.logs()],
          });
        }, 1000);

        // Auto-detener después de 10 segundos
        setTimeout(() => {
          this.stopStream();
        }, 10000);
      },

      stopStream() {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
        patchState(store, { streaming: false });
      },

      clearLogs() {
        patchState(store, { logs: [] });
      },
    };
  })
);