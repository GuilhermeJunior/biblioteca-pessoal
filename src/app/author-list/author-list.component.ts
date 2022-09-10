import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { AuthorPromiseService } from '../author/author-promise.service';
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
      this.authorPromiseService.save(new Author(newItem)).then(() => {
        this.loadElements();
      });
   }
  }

  deleteItem(id: string) {
    this.authorPromiseService.deleteById(id);
    this.loadElements();
  }

  constructor(private authorPromiseService: AuthorPromiseService) { }

  ngOnInit(): void {
    this.loadElements();
  }

  loadElements(): void {

    this.authorPromiseService.getAll()
    .then((a: Author[]) => {
     this.authors = a;
    }
    ).catch((e) => {
       console.error("Something went wrong");
    });

    if (this.authors) {
      this.totalElements = this.authors.length
    }
  }

}
