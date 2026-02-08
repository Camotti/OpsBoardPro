import { ErrorHandler, Injectable } from '@angular/core';
import { LoggerService } from '../logging/logger.service';
import { ErrorCollectorService } from './error-collector.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private logger: LoggerService,
    private collector: ErrorCollectorService
  ) {}

  handleError(error: unknown): void {
    const normalizedError = this.normalize(error);

    this.logger.log('error', 'Unhandled application error', normalizedError);

    this.collector.collect({
      message: normalizedError.message,
      stack: normalizedError.stack,
      timestamp: new Date().toISOString(),
      source: 'global',
    });
  }

  private normalize(error: any) {
    return {
      message: error?.message || 'Unknown error',
      stack: error?.stack,
    };
  }
}
