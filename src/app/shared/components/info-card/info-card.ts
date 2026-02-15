import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header">
        <h3>{{ title }}</h3>
        <span *ngIf="value" class="value">{{ value }}</span>
      </div>
      <div class="card-body">
        <ng-content></ng-content> </div>
    </div>
  `,
  styles: [`
    .card { background: white; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); padding: 20px; margin-bottom: 20px; }
    .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
    h3 { margin: 0; font-size: 1.1rem; color: #7f8c8d; }
    .value { font-size: 1.5rem; font-weight: bold; color: #2c3e50; }
  `]
})
export class InfoCardComponent {
  @Input() title: string = '';
  @Input() value?: string | number | null;
}