import { LogLevel } from './log-level.type';

export interface LogEntry {
  level: LogLevel;
  message: string;
  meta?: unknown;
  timestamp: string;
}
