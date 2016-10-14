import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { BookService } from '../book.service';

@Component({
  selector: 'devos-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Array<Book> = [];

  constructor(private toastr: ToastsManager, private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  reorderBooks(e) {
    this.books = this.bookService.reorderBooks();
    if (e) {
      this.toastr.info(e.title, 'Rating of');
    }
  }
}
