import { Injectable } from '@angular/core';

export interface CollectedError {
  message: string;
  stack?: string;
  timestamp: string;
  source: 'global' | 'http' | 'ui';
}

@Injectable({ providedIn: 'root' })
export class ErrorCollectorService {
  private readonly STORAGE_KEY = 'opsboard_errors';

  collect(error: CollectedError) {
    const errors = JSON.parse(
      localStorage.getItem(this.STORAGE_KEY) || '[]'
    );

    errors.unshift(error);
    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(errors.slice(0, 20))
    );
  }

  getAll(): CollectedError[] {
    return JSON.parse(
      localStorage.getItem(this.STORAGE_KEY) || '[]'
    );
  }
}
