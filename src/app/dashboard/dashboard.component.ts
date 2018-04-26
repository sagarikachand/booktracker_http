import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Title } from '@angular/platform-browser';

import { Book } from "app/models/book";
import { Reader } from "app/models/reader";
import { DataService } from 'app/core/data.service';
import { BookTrackerError } from 'app/models/bookTrackerError';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private dataService: DataService, private route : ActivatedRoute,
              private title: Title) { }
  
  ngOnInit() {
    // this.dataService.getAllBooks()
    //   .subscribe(
    //      (data:Book[])=>this.allBooks=data,
    //      (err:BookTrackerError)=>console.log(err.friendlyMessage),
    //      (    )=>console.log("All books retrieved")
    //   );
     
     let resolvedData= this.route.snapshot.data['resolvedBooks'];

     if( resolvedData instanceof BookTrackerError){
        console.log( resolvedData.friendlyMessage)
     } else{
       this.allBooks= resolvedData;
     }

     this.dataService.getAllReaders()
      .subscribe(
       (data : Reader[]) => this.allReaders = data, 
       (err : any) => console.log(err) ,
       (  )  => console.log(this.allReaders)
      );
      
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.title.setTitle(`Book Tracker ${VERSION.full}`);
  }

  deleteBook(bookID: number): void {
     this.dataService.deleteBook(bookID) 
       .subscribe(
         ( data : void)=> {
                    this. allBooks = this. allBooks.filter( book => book.bookID !== bookID) 
                  },
          (err )  => console.log(err)
       )
  }

  deleteReader(readerID: number): void {
    this.dataService.deleteReader(readerID) 
      .subscribe (
        ( data : void ) => {
          this. allReaders = this. allReaders.filter( reader => reader.readerID !== readerID) 
        }
      )
  }

}
