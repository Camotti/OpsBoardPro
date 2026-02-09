import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsFacade } from '../../data/logs.facade';

@Component({
  standalone: true,
  selector: 'ops-logs-page',
  imports: [CommonModule],
  templateUrl: './logs-page.html',
})
export class LogsPage implements OnInit {
  private facade = inject(LogsFacade);

  logs$ = this.facade.logs$;

  ngOnInit() {
    this.facade.start();
  }
}
