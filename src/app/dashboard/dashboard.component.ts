import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'devos-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Array<Book> = [];

  constructor(public toastr: ToastsManager) { }

  ngOnInit() {
    this.books.push(new Book('978-3864903571', 'Angular 2', 'Super Buch', 10));
    this.books.push(new Book('987-123456788', 'Angular 1.4', 'Super Buch vom Vorgänger', 6));
    this.books.push(new Book('987-123456787', 'Typescript', 'alles wird besser!', 10));
    this.books.push(new Book('987-0815', 'Java Development 1.4', 'ohh no... :-(', 1));
    //this.reorderBooks();
  }

  reorderBooks(e) {
    this.books.sort((a, b) => b.rating - a.rating);
    if (e) {
      this.toastr.info(e.title, 'Rating of');
    }
  }
}
