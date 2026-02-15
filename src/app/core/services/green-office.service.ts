import { Injectable } from '@angular/core';
import { of, Observable, delay } from 'rxjs'; // delay เอาไว้จำลอง Network ช้าๆ
import { GreenCriteria } from '../models/green-office.model';
import { MOCK_CRITERIA } from '../mock-data/mock-green-office';

@Injectable({ providedIn: 'root' })
export class GreenOfficeService {

  // ดึงเกณฑ์ทั้งหมด
  getCriteriaList(): Observable<GreenCriteria[]> {
    return of(MOCK_CRITERIA).pipe(delay(500)); // จำลองโหลด 0.5 วิ
  }

  // อัปเดตคะแนนประเมินตนเอง
  updateScore(criteriaId: number, score: number): Observable<boolean> {
    const item = MOCK_CRITERIA.find(c => c.id === criteriaId);
    if (item) {
      item.currentScore = score;
      item.status = 'Completed';
    }
    return of(true).pipe(delay(300));
  }

  // จำลองการอัปโหลดไฟล์หลักฐาน
  uploadEvidence(file: File): Observable<string> {
    console.log('Uploading file:', file.name);
    // คืนค่า URL ปลอมๆ กลับไป
    return of(`https://fake-storage.com/${file.name}`).pipe(delay(1500)); // โหลดนานหน่อย 1.5 วิ
  }
}