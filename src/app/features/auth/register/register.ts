import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  private router = inject(Router);

  // ข้อมูลสำหรับ Table organizations
  orgData = {
    name: '',
    tax_id: '',
    industry_type: '',
    total_floor_area: 0
  };

  // ข้อมูลสำหรับ Table users
  userData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  isLoading = false;

  onRegister() {
    if (this.userData.password !== this.userData.confirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }

    this.isLoading = true;
    console.log('Registering Org:', this.orgData);
    console.log('Registering User:', this.userData);

    // จำลองการเชื่อมต่อ API
    setTimeout(() => {
      this.isLoading = false;
      alert('ลงทะเบียนสำเร็จ! กรุณาเข้าสู่ระบบ');
      this.router.navigate(['/login']);
    }, 1500);
  }
}