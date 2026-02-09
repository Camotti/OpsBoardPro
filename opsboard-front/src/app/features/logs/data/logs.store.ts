import { signalStore, withState, withMethods } from '@ngrx/signals';
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
  withMethods((store) => ({
    startStream() {
      store.streaming.set(true);

      const interval = setInterval(() => {
        store.logs.set([
          {
            id: crypto.randomUUID(),
            level: 'INFO',
            message: 'Simulated log entry',
            service: 'api-gateway',
            timestamp: new Date().toISOString(),
          },
          ...store.logs(),
        ]);
      }, 1000);

      setTimeout(() => {
        clearInterval(interval);
        store.streaming.set(false);
      }, 10000);
    },
  }))
);
