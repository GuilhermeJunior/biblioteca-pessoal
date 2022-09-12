import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Author } from '../model/Author';
import { EndpointRoutes } from '../utils/endpoint-routes';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  URL = EndpointRoutes.AUTHORS;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Author[]> {

    return this.httpClient.get<Author[]>(this.URL);
  }

  getById(id: string): Observable<Author> {
    return this.httpClient.get<Author>(`${this.URL}/${id}`);
  }

  save(author: Author): Observable<Author> {
    return this.httpClient
    .post<Author>(
      this.URL,
      author,
      this.httpOptions
    );
  }

  update(author: Author): Observable<Author> {
    return this.httpClient
      .put<Author>(
        this.URL,
        author,
        this.httpOptions
      );
  }

  deleteById(id: string): Observable<unknown> {
    return this.httpClient.delete<unknown>(`${this.URL}/${id}`, this.httpOptions);
  }
}
