import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuditFacade {
  getAuditLogs() {
    return JSON.parse(
      localStorage.getItem('opsboard_logs') || '[]'
    );
  }
}
