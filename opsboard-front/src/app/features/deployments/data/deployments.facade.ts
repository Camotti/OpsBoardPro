import { Injectable, inject } from '@angular/core';
import { DeploymentsStore } from './deployments.store';

@Injectable({ providedIn: 'root' })
export class DeploymentsFacade {
  private store = inject(DeploymentsStore);

  deployments$ = this.store.deployments;
  loading$ = this.store.loading;

  load() {
    this.store.loadDeployments();
  }
}
