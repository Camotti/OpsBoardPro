import { CanActivateFn } from '@angular/router';

const enabledFeatures = ['dashboard', 'incidents'];

export const featureFlagGuard = (feature: string): CanActivateFn => {
  return () => enabledFeatures.includes(feature);
};
