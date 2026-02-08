import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ops-admin-page',
  imports: [CommonModule],
  template: `
    <h1>Admin</h1>
    <p>Gestión de usuarios, roles y configuración (mock)</p>
  `,
})
export class AdminPage {}
