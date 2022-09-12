import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author/author.service';
import { Author } from '../model/Author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors?: Author[];

  totalElements = 0;

  addItem(newItem: string) {
    if (newItem) {
      this.authorService.save(new Author(newItem)).subscribe(() => {
        this.loadElements();
      });
   }
  }

  deleteItem(id: string): void {
    this.authorService.deleteById(id)
    .subscribe(
      () => {
        this.loadElements();
      }
    );
  }

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.loadElements();
  }

  loadElements(): void {

    this.authorService.getAll()
    .subscribe((a: Author[]) => {
     this.authors = a;
     if (!Array.isArray(this.authors)) {
      return;
     } else {
       this.totalElements = this.authors.length;
     }
    }
    );

  }

}
