import { inject, Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import { LoginRequestDto } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private store = inject(AuthStore);

  user$ = this.store.user;
  tokens$ = this.store.tokens;

  login(payload: LoginRequestDto) {
    // SIMULACIÓN
    const fakeTokens = {
      accessToken: 'fake-jwt-token',
      refreshToken: 'fake-refresh-token',
      expiresAt: Date.now() + 1000 * 60 * 15,
    };

    const fakeUser = {
      id: '1',
      username: payload.username,
      roles: ['ADMIN'],
    };

    this.store.loginSuccess(fakeUser, fakeTokens);
  }

  logout() {
    this.store.logout();
  }

  isAuthenticated(): boolean {
    return !!this.store.tokens();
  }
}
