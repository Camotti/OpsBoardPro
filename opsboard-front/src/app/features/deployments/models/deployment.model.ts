export type DeploymentStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'RUNNING'
  | 'FAILED'
  | 'SUCCESS';

export interface Deployment {
  id: string;
  service: string;
  version: string;
  status: DeploymentStatus;
  createdAt: string;
}
