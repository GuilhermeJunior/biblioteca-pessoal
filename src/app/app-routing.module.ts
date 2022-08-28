import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'', component: HomeComponent},
                        {path: 'book', component: BookComponent},
                        {path: 'book-list', component: BookListComponent },
                        {path: 'author-list', component: AuthorListComponent },
                        {path: 'book/details/:id', component: BookDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
