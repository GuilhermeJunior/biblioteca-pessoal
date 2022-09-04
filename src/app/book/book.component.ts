import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Book } from '../model/Book';
import { Constants } from '../utils/constants';
import { WebStorageUtils } from '../utils/WebStoreUtils';
import { BookService } from './book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @ViewChild('myform') form!: NgForm;
  book!: Book;
  books!: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    WebStorageUtils.initWebStorage();
    this.book = new Book("", "", "");
    this.books = WebStorageUtils.get(Constants.BOOKS_KEY);
  }

  onSubmit() {
    this.bookService.save(this.book);
    this.form.reset();
    this.book = new Book("", "", "");
    this.books = this.bookService.getBooks();
  }

}
