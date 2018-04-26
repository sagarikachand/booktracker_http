import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { tap } from 'rxjs/operators'


@Injectable()

export class HeaderInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("AddbookInterceptor  " + req.url);
        //     Make a clone of original request and use overloads provided with req.clone();
        let transformReq = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': 'custom-token '
            }
        })

        //  Provide to interceptor next in the chain. See Log response interceptor to know how to configure multiple interceptors
        return next.handle(transformReq)
    }
}