import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { MainLayoutComponent } from './layout/main-layout/main-layout';
import { DashboardComponent } from './features/dashboard/dashboard';
import { CarbonLogsComponent } from './features/logs/carbon-logs';
import { AiScanComponent } from './features/ai-scan/ai-scan';
import { RegisterComponent } from './features/auth/register/register';
import { HomeComponent } from './features/home/home';

// import { GreenOfficeFormComponent } from './features/green-office/form/green-office-form'; // ตัวอย่างหน้าถัดไป

export const routes: Routes = [
  // 1. หน้าแรกสุด ถ้ายังไม่ login ให้ดีดไปหน้า login
  { path: '', component: HomeComponent, title: 'Green Sync - นวัตกรรมองค์กรสีเขียว' },
  
  // 2. หน้า Login (ไม่ใช้ Layout หลัก)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, title: 'ลงทะเบียนองค์กร - Green Sync' },

  // 3. หน้าที่ต้องผ่านการ Login และใช้ Layout ร่วมกัน (Sidebar/Header)
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [authGuard], // เดี๋ยวค่อยมาเปิดใช้งานเมื่อทำระบบ Guard เสร็จ
    children: [
      { 
        path: 'dashboard', 
        component: DashboardComponent,
        title: 'Green Sync - ภาพรวมระบบ' 
      },
      
      // GROUP 3: CARBON FOOTPRINT
      { 
        path: 'carbon/logs', 
        component: CarbonLogsComponent,
        title: 'บันทึกก๊าซเรือนกระจก' 
      },
      {path: 'ai-scan' ,
        component: AiScanComponent,
        title: 'AI Scan - วิเคราะห์ภาพถ่ายเพื่อลดคาร์บอน'
      }
      
      // GROUP 2: GREEN OFFICE (รอสร้าง Component)
      // { path: 'green-office/form', component: GreenOfficeFormComponent },

      // GROUP 1: ORGANIZATION
      // { path: 'org/profile', component: OrgProfileComponent },
    ]
  },

  // 4. กรณีพิมพ์ URL มั่ว (Wildcard Route)
  { path: '**', redirectTo: 'login' }
];