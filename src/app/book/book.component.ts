import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'devos-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() rated = new EventEmitter<Book>();

  ngOnInit() {
  }

  rateUp() {
    if (this.book.rateUp()) {
      this.rated.emit(this.book);
    }
  }

  rateDown() {
    if (this.book.rateDown()) {
      this.rated.emit(this.book);
    }
  }
}
