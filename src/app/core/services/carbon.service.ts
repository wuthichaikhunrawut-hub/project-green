import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { CarbonLog } from '../models/carbon.model';
import { MOCK_CARBON_LOGS } from '../mock-data/mock-carbon';

@Injectable({ providedIn: 'root' })
export class CarbonService {
  
  // ดึงข้อมูลทั้งหมด
  getLogs(): Observable<CarbonLog[]> {
    return of(MOCK_CARBON_LOGS);
  }

  // จำลองการบันทึกข้อมูล
  addLog(log: CarbonLog): Observable<boolean> {
    MOCK_CARBON_LOGS.push(log);
    console.log('Saved to Mock DB:', log);
    return of(true);
  }

  // จำลอง AI Scan (คืนค่าเลขมั่วๆ ไปก่อน)
  scanBill(image: File): Observable<Partial<CarbonLog>> {
    console.log('Scanning image:', image.name);
    return of({
      amount: Math.floor(Math.random() * 1000) + 100, // สุ่มเลข 100-1100
      unit: 'kWh'
    });
  }
}