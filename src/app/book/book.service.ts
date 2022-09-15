import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../model/Book";
import { EndpointRoutes } from "../utils/endpoint-routes";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  URL = EndpointRoutes.BOOKS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  books!: Book[];

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.URL);
  }

  getById(id: string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.URL}/${id}`);
  }

  save(book: Book): Observable<Book> {
    return this.httpClient
    .post<Book>(
      this.URL,
      book,
      this.httpOptions
    );
  }

  updateById(id: string, body: Book): Observable<Book>  {

    return this.httpClient
    .put<Book>(
      `${this.URL}/${id}`,
      body,
      this.httpOptions
    )
  }

  deleteById(id: string): Observable<unknown> {
    return this.httpClient.delete<unknown>(`${this.URL}/${id}`, this.httpOptions);
  }

}
