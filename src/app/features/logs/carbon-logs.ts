import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carbon-logs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carbon-logs.html',
  styleUrl: './carbon-logs.css'
})
export class CarbonLogsComponent implements OnInit {
  // ข้อมูลจำลองสำหรับแสดงผลในตาราง (จาก Table carbon_activity_logs)
  logs: any[] = [
    { id: 1, date: '2024-01-10', type: 'Electricity', amount: 450.5, unit: 'kWh', emission: 225.15, source: 'AI_OCR' },
    { id: 2, date: '2024-01-12', type: 'Water', amount: 25.0, unit: 'm3', emission: 12.45, source: 'MANUAL' },
    { id: 3, date: '2024-01-15', type: 'Gasoline', amount: 120.0, unit: 'Litre', emission: 280.20, source: 'MANUAL' }
  ];

  // ตัวแปรสำหรับฟอร์มเพิ่มข้อมูลใหม่
  newEntry = {
    activity_type: '',
    month: new Date().getMonth() + 1,
    year: 2024,
    usage_amount: 0,
    evidence_file: null as File | null
  };

  isScanning = false; // สถานะตอน AI กำลังอ่านบิล

  ngOnInit() {}

  // จำลองการสแกนบิลด้วย AI
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.isScanning = true;
      // จำลอง AI ประมวลผล 2 วินาที
      setTimeout(() => {
        this.newEntry.activity_type = 'Electricity';
        this.newEntry.usage_amount = 1250.75;
        this.isScanning = false;
        alert('AI ตรวจพบ: บิลค่าไฟฟ้า ปริมาณ 1,250.75 kWh');
      }, 2000);
    }
  }

  saveLog() {
    // ส่งข้อมูลไปบันทึกลง Table carbon_activity_logs
    console.log('Saving...', this.newEntry);
    // ... logic ส่ง API ...
  }
}