import { Component } from '@angular/core';
import { BookStoreService } from './books/book-store.service';
import { Book } from './books/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookStoreService]
})
export class AppComponent {
  filteredBooks: Book[];

  constructor(private bookStoreService: BookStoreService) {
  }

  searchBook(title: string) {
    this.bookStoreService
      .getBooks(title)
      .subscribe(books => this.filteredBooks = books);
  }
}
