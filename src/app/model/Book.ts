export class Book {
  id!: string;
  name?: string;
  author?: string;
  isbn?: string;

  constructor(name: string, author: string, isbn: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.name = name;
    this.author = author;
    this.isbn = isbn;
  }

}
