import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFacade } from '../../data/dashboard.facade';

@Component({
  standalone: true,
  selector: 'app-dashboard-page',
  imports: [CommonModule],
  templateUrl: './dashboard-page.html',
  styleUrls: ['./dashboard-page.scss'],
})
export class DashboardPage implements OnInit {
  private facade = inject(DashboardFacade);

  kpis$ = this.facade.kpis$;
  loading$ = this.facade.loading$;

  ngOnInit(): void {
    this.facade.load();
  }
}
