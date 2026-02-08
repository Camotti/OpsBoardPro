import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsFacade } from '../../data/incidents.facade';

@Component({
  standalone: true,
  selector: 'ops-incidents-page',
  imports: [CommonModule],
  templateUrl: './incidents-page.html',
})
export class IncidentsPage implements OnInit {
  private facade = inject(IncidentsFacade);

  incidents$ = this.facade.incidents$;
  loading$ = this.facade.loading$;

  ngOnInit() {
    this.facade.load();
  }
}
