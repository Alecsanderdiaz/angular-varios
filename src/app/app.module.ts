import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookSearchComponent } from './books/book-search/book-search.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { RatingComponent } from './rating/rating.component';
import { RatingStarComponent } from './rating/rating-star/rating-star.component';

const appRoutes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'rating', component: RatingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookSearchComponent,
    BooksListComponent,
    RatingComponent,
    RatingStarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
