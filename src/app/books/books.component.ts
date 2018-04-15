import { Component, OnInit } from '@angular/core';
import { BookStoreService } from './book-store.service';
import { Book } from './book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  filteredBooks: Book[];

  constructor(private bookStoreService: BookStoreService) {
  }

  searchBook(title: string) {
    this.bookStoreService
      .getBooks(title)
      .subscribe(books => this.filteredBooks = books);
  }
}
