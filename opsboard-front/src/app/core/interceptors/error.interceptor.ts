import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { LoggerService } from '../logging/logger.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const logger = inject(LoggerService);

  return next(req).pipe(
    catchError((error) => {
      logger.log('error', 'HTTP Error', {
        url: req.url,
        status: error.status,
      });

      return throwError(() => error);
    })
  );
};
