import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenOfficeService } from '../../core/services/green-office.service';
import { CarbonService } from '../../core/services/carbon.service';
import { ThaiDatePipe } from '../../shared/pipes/thai-date-pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ThaiDatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  private greenService = inject(GreenOfficeService);
  private carbonService = inject(CarbonService);

  // ตัวแปรสำหรับแสดงผล
  currentDate = new Date();
  greenScore = 0;
  carbonTotal = 0;
  energyUsage = 0;
  
  // Mockup ข้อมูลกิจกรรมล่าสุด (เดี๋ยวอนาคตดึงจาก Service จริง)
  recentActivities = [
    { text: 'บันทึกการใช้ไฟฟ้า (ม.ค.)', time: '2 ชม. ที่แล้ว', type: 'success' },
    { text: 'ส่งผลประเมินหมวด 1', time: '5 ชม. ที่แล้ว', type: 'info' },
    { text: 'AI ตรวจพบบิลน้ำประปา', time: '1 วันที่แล้ว', type: 'warning' },
  ];

  ngOnInit() {
    // 1. ดึงข้อมูลคะแนน Green Office
    this.greenService.getCriteriaList().subscribe(criteria => {
      const totalMax = criteria.reduce((sum, c) => sum + c.maxScore, 0);
      const totalGot = criteria.reduce((sum, c) => sum + (c.currentScore || 0), 0);
      this.greenScore = totalMax > 0 ? Math.round((totalGot / totalMax) * 100) : 0;
    });

    // 2. ดึงข้อมูลคาร์บอน
    this.carbonService.getLogs().subscribe(logs => {
      this.carbonTotal = logs.reduce((sum, log) => sum + log.emission, 0);
      
      // กรองเฉพาะไฟฟ้าเพื่อหาหน่วย kWh รวม
      this.energyUsage = logs
        .filter(l => l.type === 'Electricity')
        .reduce((sum, l) => sum + l.amount, 0);
    });
  }
}