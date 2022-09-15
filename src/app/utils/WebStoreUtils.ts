import { Book } from "../model/Book";
import { Constants } from "./constants";

export class WebStorageUtils {
  static get(key: string): any {
    return JSON.parse(localStorage.getItem(key)!);
  }

  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getArray(key: string): any[] {
    if (localStorage.getItem(key) == undefined) {
      localStorage.setItem(key, JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(key)!);
  }

  static setArray(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static saveItemArray(keyCollection: string, value: any) {
    let collection = this.getArray(keyCollection);
    collection.push(value);
    this.setArray(keyCollection, collection);
  }

  static sequenceId(key: string) {
    return this.getArray(key).length;
  }


/*   static initWebStorage(): void {
    if(localStorage.getItem(Constants.BOOK_NAME) != null) {
      return;
    }

    let book = new Book(Constants.BOOK_NAME, Constants.BOOK_AUTHOR, Constants.BOOK_ISBN);
    localStorage.setItem(Constants.BOOK_NAME, JSON.stringify(book));
    localStorage.setItem(Constants.BOOKS_KEY, JSON.stringify([]));
  } */
}
