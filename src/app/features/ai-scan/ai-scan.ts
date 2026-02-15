import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-scan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-scan.html',
  styleUrl: './ai-scan.css'
})
export class AiScanComponent {
  selectedFile: File | null = null;
  previewUrl: string | null = null;
  isProcessing = false;
  scanResult: any = null;

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.scanResult = null;
      // สร้าง Preview รูปภาพ
      const reader = new FileReader();
      reader.onload = () => this.previewUrl = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

  processAi() {
    this.isProcessing = true;
    // จำลอง AI อ่านข้อมูล 3 วินาที (เชื่อมโยง Intent จาก Table chat_logs ในอนาคต)
    setTimeout(() => {
      this.isProcessing = false;
      this.scanResult = {
        type: 'Electricity (ไฟฟ้า)',
        amount: 1250.75,
        unit: 'kWh',
        date: 'มกราคม 2569',
        confidence: 98.5
      };
    }, 3000);
  }

  confirmSave() {
    alert('บันทึกข้อมูลเข้าสู่ระบบเรียบร้อย!');
    // Logic: Insert data into carbon_activity_logs
    this.reset();
  }

  reset() {
    this.selectedFile = null;
    this.previewUrl = null;
    this.scanResult = null;
  }
}