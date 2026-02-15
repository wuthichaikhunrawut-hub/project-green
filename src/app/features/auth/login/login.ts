import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router ,RouterLink} from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  username = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  onLogin() {
    this.isLoading = true;
    this.errorMessage = '';

    // จำลอง Delay 1 วินาที ให้ UX ดูสมูทขึ้น
    setTimeout(() => {
      this.authService.login(this.username, this.password).subscribe({
        next: (isSuccess) => {
          this.isLoading = false;
          if (isSuccess) {
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง';
          }
        },
        error: () => {
          this.isLoading = false;
          this.errorMessage = 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้';
        }
      });
    }, 1000);
  }
}