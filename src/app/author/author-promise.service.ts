import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first, firstValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Author } from '../model/Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorPromiseService {
  URL = 'http://localhost:3000/authors';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Promise<Author[]> {
    return firstValueFrom(this.httpClient.get<Author[]>(this.URL));
  }

  getById(id: string): Promise<Author> {
    return firstValueFrom(this.httpClient.get<Author>(`${this.URL}/${id}`));
  }

  save(author: Author): Promise<Author> {
    return firstValueFrom(this.httpClient
    .post<Author>(
      this.URL,
      JSON.stringify(author),
      this.httpOptions
    ));
  }

  update(author: Author): Promise<Author> {
    return firstValueFrom(this.httpClient
      .put<Author>(
        this.URL,
        JSON.stringify(author),
        this.httpOptions
      ));
  }

  deleteById(id: string): Promise<void> {
    return firstValueFrom(this.httpClient.delete<void>(`${this.URL}/${id}`));
  }
 }
