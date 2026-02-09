import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ui-button',
  imports: [CommonModule],
  template: `
    <button
      [disabled]="disabled"
      [attr.aria-label]="ariaLabel">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() ariaLabel = '';
}
