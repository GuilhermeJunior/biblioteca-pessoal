import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AuthorService } from '../author/author.service';
import { Author } from '../model/Author';
import { Book } from '../model/Book';
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
  authors!: Author[];

  constructor(private bookService: BookService,
              private authorService: AuthorService) {}

  ngOnInit(): void {
    this.book = new Book("", "", "", false);
    this.loadElements();
  }

  onSubmit() {

        if (this.book.id) {
            this.bookService.updateById(this.book.id, this.book).subscribe(() => {
            this.form.reset();
            this.loadElements();
          });
        } else {
          this.bookService.save(this.book).subscribe(() => {
            this.form.reset();
            this.loadElements();
          });
        }

    this.book = new Book("", "", "", false);
  }

  updateById(id: string) {
    this.bookService.getById(id)
      .subscribe(
        (b) => {
          this.book = b;
        }
      )
  }

  deleteItem(id: string): void {
    this.bookService.deleteById(id)
      .subscribe(
        () => {
          this.loadElements();
        }
      )
  }

  loadElements() {
    this.bookService.getAll().subscribe((b: Book[]) => {
      this.books = b;
    });

    this.authorService.getAll().subscribe((a: Author[]) => {
      this.authors = a;
    })

  }

}
