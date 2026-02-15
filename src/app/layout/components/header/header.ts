import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service'; // เรียกใช้ Service ที่เราทำไว้
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="user-info">
        <span>สวัสดี, <strong>{{ username }}</strong></span>
        <span class="role-badge">{{ role }}</span>
      </div>
      <button (click)="logout()" class="logout-btn">ออกจากระบบ</button>
    </header>
  `,
  styles: [`
    .header { 
      height: 60px; 
      background: white; 
      display: flex; 
      justify-content: flex-end; 
      align-items: center; 
      padding: 0 20px; 
      box-shadow: 0 1px 3px rgba(0,0,0,0.1); 
    }
    .user-info { margin-right: 20px; display: flex; align-items: center; gap: 10px; }
    .role-badge { background: #e2e8f0; font-size: 0.8rem; padding: 2px 8px; border-radius: 4px; color: #475569; }
    .logout-btn { 
      background: transparent; 
      border: 1px solid #ef4444; 
      color: #ef4444; 
      padding: 5px 15px; 
      border-radius: 4px; 
      cursor: pointer; 
    }
    .logout-btn:hover { background: #ef4444; color: white; }
  `]
})
export class HeaderComponent {
  authService = inject(AuthService);
  router = inject(Router);

  // ดึงข้อมูล User จาก Service (ถ้าไม่มีให้เป็นค่า Default)
  username = this.authService.getUser()?.username || 'Guest';
  role = this.authService.getUser()?.role || 'Visitor';

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}