import { CanActivateFn, Router } from "@angular/router";
import {inject} from '@angular/core';
import { AuthFacade } from "../../features/auth/data/auth.facade";

export const authGuard: CanActivateFn = () => {
    const auth= inject(AuthFacade);
    const router= inject(Router);

    if (!auth.isAuthenticated()) {
        router.createUrlTree(['/auth/login'])
        return false;
    }

    return true;
};