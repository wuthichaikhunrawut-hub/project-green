import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      console.error('🚨 Error Intercepted:', error);
      // ตรงนี้ใส่ Logic แจ้งเตือน Alert สวยๆ ได้
      // alert('เกิดข้อผิดพลาด: ' + error.message);
      return throwError(() => error);
    })
  );
};