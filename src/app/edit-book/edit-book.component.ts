import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'app/models/book';
import { DataService } from 'app/core/data.service';
import { OldBook } from 'app/models/oldBook';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styles: []
})
export class EditBookComponent implements OnInit {

  selectedBook: Book;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    let bookID: number = parseInt(this.route.snapshot.params['id']);
     this.dataService.getBookById(bookID)
       .subscribe(
          (data:Book)=>this.selectedBook=data,
          (error:any)=> console.log(error),
          ( )=>console.log(this.selectedBook  )

      );

      this.dataService.getOldBookById(bookID)
       .subscribe( 
          (data : OldBook) => console.log(data.bookTitle )
       )
  }

  setMostPopular(): void {
    this.dataService.setMostPopularBook(this.selectedBook);
  }

  saveChanges(): void {
    this.dataService.updateBook(this.selectedBook)
      .subscribe(
      ( data  )  => console.log(`The book  with id  ${this.selectedBook.bookID} is updated sucessfully` ),
      (err : any )   => console.log(err)
      )
  }
}
