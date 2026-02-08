import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdminFacade {
  // mock inicial
  getUsers() {
    return [
      { id: '1', username: 'admin', role: 'ADMIN' },
      { id: '2', username: 'user', role: 'USER' },
    ];
  }
}
