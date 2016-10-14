import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

import { Book } from '../shared/book';

@Component({
  selector: 'devos-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.book = this.bookService.getBookByIsbn(this.route.snapshot.params['isbn']);
  }

}
