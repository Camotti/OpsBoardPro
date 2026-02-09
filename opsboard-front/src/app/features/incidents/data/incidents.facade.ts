import { Injectable, inject } from '@angular/core';
import { IncidentsStore } from './incidents.store';

@Injectable({ providedIn: 'root' })
export class IncidentsFacade {
  private store = inject(IncidentsStore);

  incidents$ = this.store.incidents;
  loading$ = this.store.loading;

  load() {
    this.store.loadIncidents();
  }
}
