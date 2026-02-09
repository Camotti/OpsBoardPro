import { Injectable, inject } from '@angular/core';
import { LogsStore } from './logs.store';

@Injectable({ providedIn: 'root' })
export class LogsFacade {
  private store = inject(LogsStore);

  logs$ = this.store.logs;
  streaming$ = this.store.streaming;

  start() {
    this.store.startStream();
  }
}
