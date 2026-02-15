import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from '../models/auth.model';
import { MOCK_USER } from '../mock-data/mock-users';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedIn = false;
  private currentUser: User | null = null;

  login(username: string, password: string): Observable<boolean> {
    // จำลองการ Login (ของจริงต้องยิง API)
    if (username === 'admin' && password === '1234') {
      this.isLoggedIn = true;
      this.currentUser = MOCK_USER;
      localStorage.setItem('token', 'fake-jwt-token');
      return of(true);
    }
    return of(false);
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || !!localStorage.getItem('token'); // เช็คว่ามี Token ไหม
  }

  getUser(): User | null {
    return this.currentUser || MOCK_USER; // คืนค่า Mock ไปก่อน
  }
}