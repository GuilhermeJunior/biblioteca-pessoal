import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookListComponent } from '../book-list/book-list.component';
import { books, Book } from '../books';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {


  book: Book | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routParams.get('id'));

    this.book = books.find(book => book.id === bookIdFromRoute);
  }

}
