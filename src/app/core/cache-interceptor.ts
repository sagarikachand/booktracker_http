import { Injectable } from "@angular/core";
import { HttpInterceptor , HttpRequest , HttpHandler , HttpEvent , HttpResponse} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of'; 
import { tap} from 'rxjs/operators'
import { HttpCacheService } from "app/core/http-cache.service";


@Injectable()

export class Cachenterceptor  implements HttpInterceptor{
constructor( private cacheService : HttpCacheService){
    
}
    intercept(req :HttpRequest<any> , next : HttpHandler) :Observable<HttpEvent<any>>{
    //  If response is other than get , Then get a fresh copy
        if( req.method !== 'GET'){
            console.log( " invalidating cache " + req.method  + req.url);
             this.cacheService.invalidateCache();
             return next.handle(req)

        }
 
        //   get the cached response
        const cachedResponse =  this.cacheService.get(req.url);
        // Check if you get something
        if(cachedResponse){
            console.log( " returning cached response " + cachedResponse.url);

            return of(cachedResponse)
        } 

   return next.handle(req) 
   .pipe(
       tap(event =>{
           if(event instanceof HttpResponse){
                     console.log("adding to cache response " +  req.url)
                     this.cacheService.put(req.url , event )
           }
       })
   )
      
    }
}