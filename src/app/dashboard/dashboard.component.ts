import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'devos-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: string[];

  constructor() { }

  ngOnInit() {
    this.books = ['Typescript', 'Angualr 2'];
  }
}
