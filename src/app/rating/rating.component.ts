import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  title: string;

  constructor() {
    this.title = 'Rating stars using Angular';
  }

  onRating(rating: number) {
    console.log(rating);
  }

}
