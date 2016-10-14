import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'devos-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()book: Book;

  ngOnInit() {
  }

}
