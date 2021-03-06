import { Injectable } from '@angular/core';
import { Book } from './shared/book';

@Injectable()
export class BookService {

  books: Array<Book> = [];

  constructor() {
    this.books.push(new Book('978-3864903571', 'Angular 2', 'Super Buch', 10));
    this.books.push(new Book('987-123456788', 'Angular 1.4', 'Super Buch vom Vorgänger', 6));
    this.books.push(new Book('987-123456787', 'Typescript', 'alles wird besser!', 10));
    this.books.push(new Book('987-0815', 'Java Development 1.4', 'ohh no... :-(', 1));
  }

  getBooks() {
    return this.books;
  }

  getBookByIsbn(isbn) {
    return this.books.find(book => book.isbn === isbn);
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
    return this.books;
  }
}
