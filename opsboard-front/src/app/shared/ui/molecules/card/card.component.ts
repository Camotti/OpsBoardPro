import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ui-card',
  imports: [CommonModule],
  template: `
    <section>
      <ng-content></ng-content>
    </section>
  `,
})
export class CardComponent {}
