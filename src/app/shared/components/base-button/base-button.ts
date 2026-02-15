import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [type]="type"
      [class]="'btn ' + colorClass"
      (click)="onClick.emit($event)"
      [disabled]="disabled">
      <ng-content></ng-content> </button>
  `,
  styles: [`
    .btn { padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; transition: 0.2s; }
    .btn:hover { opacity: 0.9; transform: translateY(-1px); }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .primary { background: #2c3e50; color: white; } /* สีน้ำเงินเข้ม */
    .success { background: #27ae60; color: white; } /* สีเขียว */
    .danger { background: #c0392b; color: white; } /* สีแดง */
  `]
})
export class BaseButtonComponent {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() color: 'primary' | 'success' | 'danger' = 'primary';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<Event>();

  get colorClass() {
    return this.color;
  }
}