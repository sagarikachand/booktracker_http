import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { allBooks, allReaders } from 'app/data';
import { LoggerService } from './logger.service';
import { Reader } from "app/models/reader";
import { Book } from "app/models/book";
import { BookTrackerError } from 'app/models/bookTrackerError';
import { Observable } from 'rxjs/Observable';
import { OldBook } from "app/models/oldBook";
import { map , tap , catchError}  from 'rxjs/operators'
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders() : Observable<Reader[]> {
     return this.http.get<Reader[]>('/api/readers')
  }

  getReaderById(id: number): Observable<Reader> {
    return this.http.get<Reader>(`api/readers/${id}`);
  }

  getAllBooks() :Observable<Book[]  |  BookTrackerError> {
    console.log("getAllBooks called")
      return    this.http.get<Book[]>('api/books')
      .pipe(
         catchError( error=> this.handleError(error) )
      );
  }

  handleError( error : HttpErrorResponse) : Observable<BookTrackerError>{
         let errorObj= new BookTrackerError();
         errorObj.errorNumber=100;
         errorObj.message= error.statusText;
         errorObj.friendlyMessage="Error occured while fetching books record";
         return ErrorObservable.create(errorObj);

  }

  getBookById(id: number): Observable<Book> {
    // Here the getHeaders variable is storing the header options
     let  getHeaders : HttpHeaders = new HttpHeaders({
       Accept  :  'application/json',
       Authorization  :  'my-token'
     });

    //  Http get can take a second parameter which is an object with several properties
    return  this.http.get<Book>(`api/books/${id}`,{
       headers: getHeaders
    })
  }

  getOldBookById(id:number):Observable<OldBook>{
     return  this.http.get<Book>(`api/books/${id}`)
     .pipe(
        map(b => <OldBook>{
               bookTitle :  b.title,
               year :  b.publicationYear
        }),
        tap( classicBook =>{
          console.log(`the original book retuned was `);
          console.log(classicBook);
        }
          )
     )
  }

  addBook (newBook : Book) : Observable<Book> {
   return this.http.post<Book>('api/books' , newBook, {
       headers: new HttpHeaders({
          'Content-Type' : 'application/json'
       })
    });
  }

updateBook (updatedBook : Book) : Observable<void> {
    return this.http.put<void>(`api/books/${updatedBook.bookID}` , updatedBook)
   }

  deleteBook( bookId:number ) :Observable<void> {
      return this.http.delete<void>( `/api/books/${bookId}`);
  }

  updateReader(updatedReader: Reader) : Observable<void> {
    return this.http.put<void>(`api/readers/${updatedReader.readerID}` , updatedReader)
  }
  addReader(newReader : Reader) : Observable<Reader>{
    return this.http.post<Reader>(`api/readers` , newReader)
  }

  deleteReader( readerId: number ) : Observable<void> {
     return this.http.delete<void>(`api/readers/${readerId}`)
  }

 
}
