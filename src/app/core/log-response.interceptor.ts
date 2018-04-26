import { Injectable } from "@angular/core";
import { HttpInterceptor , HttpRequest , HttpHandler , HttpEvent , HttpEventType} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { tap } from 'rxjs/operators'





Injectable()

export class LogResponseInterceptor implements HttpInterceptor {

    intercept(req : HttpRequest<any>  , next : HttpHandler) : Observable<HttpEvent<any>>{

//      If I were planning to manipulate the HttpRequest, this is where I would make a copy of the request and start making changes to it.
//  I'm only interested in manipulating the response here though. Do note that I can manipulate the request and response in the same interceptor. 
//  I'm choosing to use two here for a couple of reasons. First I want to show you how to configure multiple interceptors, and second, 
//  the functionality provided by each of them is very different, so I'd rather keep them separate from each other. 
//  I'm not manipulating the request, so I can just pass the original request to the handle method. 
//  I'm then going to use the RxJS tap operator to give me access to the response. I'll chain on a call to the pipe method, and pass it the operator
  console.log( "logInterceptor  " + req.url)
         return next.handle(req) 
          .pipe(
              tap( event => {
                  if( event.type ===HttpEventType.Response)
                  {
                      console.log("log body interceptor response")
                      console.log( event.body)
                  }
              })
          )
    }
} 