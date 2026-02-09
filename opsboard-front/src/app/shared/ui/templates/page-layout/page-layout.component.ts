import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ui-page-layout',
  imports: [CommonModule],
  template: `
    <main>
      <ng-content></ng-content>
    </main>
  `,
})
export class PageLayoutComponent {}
