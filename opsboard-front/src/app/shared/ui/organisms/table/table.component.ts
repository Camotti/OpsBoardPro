import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ui-table',
  imports: [CommonModule],
  template: `
    <table>
      <thead>
        <tr>
          <th *ngFor="let col of columns">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <ng-content></ng-content>
      </tbody>
    </table>
  `,
})
export class TableComponent {
  @Input() columns: string[] = [];
}
