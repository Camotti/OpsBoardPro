import { Injectable } from '@angular/core';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

@Injectable({ providedIn: 'root' })
export class LoggerService {

  log(level: LogLevel, message: string, meta?: unknown) {
    const entry = {
      level,
      message,
      meta: this.mask(meta),
      timestamp: new Date().toISOString(),
    };

    console[level === 'error' ? 'error' : 'log'](entry);

    this.store(entry);
  }

  private store(entry: unknown) {
    const logs = JSON.parse(localStorage.getItem('opsboard_logs') || '[]');
    logs.unshift(entry);
    localStorage.setItem('opsboard_logs', JSON.stringify(logs.slice(0, 20)));
  }

  private mask(meta: unknown) {
    if (!meta) return meta;
    return JSON.stringify(meta)
      .replace(/token":"(.*?)"/g, 'token":"***"');
  }
}
