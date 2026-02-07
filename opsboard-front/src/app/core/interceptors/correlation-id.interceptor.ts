import { HttpInterceptorFn } from "@angular/common/http";

export const correlationIdInterceptor: HttpInterceptorFn = (req, next)=> {
    const correlationId= crypto.randomUUID();

    const cloned = req.clone({
        setHeaders: {
            'x-Correlation-ID': correlationId,

        },
    });

    return next(cloned);
}