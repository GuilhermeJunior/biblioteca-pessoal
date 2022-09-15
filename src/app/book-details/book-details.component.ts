import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book/book.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {


  book: Book | undefined;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    const routParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = String(routParams.get('id'));

    this.bookService.getById(bookIdFromRoute).subscribe((b) => {
      this.book = b;
    });
  }

}
