import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthFacade } from '../../features/auth/data/auth.facade';

export const roleGuard = (allowed: string[]): CanActivateFn => {
  return () => {
    const auth = inject(AuthFacade);
    const user = auth.user$();

    return !!user && allowed.some(r => user.roles.includes(r));
  };
};
