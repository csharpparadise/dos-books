import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'devos-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Array<Book> = [];

  constructor() { }

  ngOnInit() {
    this.books.push(new Book('987-123456789', 'Angular 2', 'Super Buch', 10));
    this.books.push(new Book('987-123456788', 'Angular 1.4', 'Super Buch vom Vorgänger', 10));
    this.books.push(new Book('987-123456787', 'Typescript', 'alles wird besser!', 10));
  }
}
