import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  items = ['Machado de Assis', 'Fiódor Dostoiévski', 'Charles Dickens']
  totalElements = 0

  addItem(newItem: string) {
    if (newItem) {
      this.items.push(newItem);
      this.totalElements = this.items.length;
   }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
