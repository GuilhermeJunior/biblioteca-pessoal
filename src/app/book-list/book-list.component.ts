import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books!: Book[];
  @Output() updateItemEvent = new EventEmitter<string>();
  @Output() deleteItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  updateById(id: string) {
    this.updateItemEvent.emit(id);
  }

  deleteItem(id: string) {
    this.deleteItemEvent.emit(id);
  }

}
