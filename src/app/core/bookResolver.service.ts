import { Injectable } from "@angular/core";
import { Resolve , ActivatedRouteSnapshot , RouterStateSnapshot } from "@angular/router";
import { BookTrackerError } from "app/models/bookTrackerError";
import { Book } from "app/models/book";
import { DataService } from "app/core/data.service";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {catchError } from 'rxjs/operators'
 




@Injectable()
export class BookResolverService implements Resolve<Book[] | BookTrackerError>{

    constructor ( private dataService : DataService){ }

    //  Here we know that we will make call to get allBooks, So the return type of resolve will be Book[] or BookTrackerError
    // No need to subscribe here, Angular wil auto subscribe
    resolve( route : ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<Book[] | BookTrackerError>{

        return   this.dataService.getAllBooks()
            .pipe(
               catchError( error => of(error) )
          )

    }
}