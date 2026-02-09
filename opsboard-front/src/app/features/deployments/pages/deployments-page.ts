import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeploymentsFacade } from '../data/deployments.facade';

@Component({
  standalone: true,
  selector: 'ops-deployments-page',
  imports: [CommonModule],
  templateUrl: './deployments-page.html',
})
export class DeploymentsPage implements OnInit {
  private facade = inject(DeploymentsFacade);

  deployments$ = this.facade.deployments$;
  loading$ = this.facade.loading$;

  ngOnInit() {
    this.facade.load();
  }
}
