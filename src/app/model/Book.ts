export class Book {
  id!: string;
  name?: string;
  author?: string;
  isbn?: string;
  isRead?: boolean;

  constructor(name: string, author: string, isbn: string, isRead: boolean) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.isRead = isRead;
  }

}
