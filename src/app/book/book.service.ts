import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Book } from "../model/Book";
import { Constants } from "../utils/constants";
import { WebStorageUtils } from "../utils/WebStoreUtils";

@Injectable()
export class BookService {

  books!: Book[];

  constructor() {
    this.books = WebStorageUtils.get(Constants.BOOKS_KEY);
  }

  save(book: Book) {
    this.books = WebStorageUtils.get(Constants.BOOKS_KEY);
    this.books.push(book);
    WebStorageUtils.set(Constants.BOOKS_KEY, this.books);
  }

  getBooks(): Book[] {
    this.books = WebStorageUtils.get(Constants.BOOKS_KEY);
    return this.books;
  }
}
