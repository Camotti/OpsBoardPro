import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ops-audit-page',
  imports: [CommonModule],
  template: `
    <h1>Audit</h1>
    <p>Registro de acciones del sistema (mock)</p>
  `,
})
export class AuditPage {}
