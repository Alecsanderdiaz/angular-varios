import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit {

  @Input() max: number;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRating = new EventEmitter<number>();

  active: boolean = true;
  status: boolean = false;

  maxItem: any[];
  ratedCount: number;
  something: any[];

  constructor() {
    this.ratedCount = 0;
    this.something = [
      {name: 'NAMEE', sent: false},
      {name: 'NAMEE2', sent: true},
  ];
  }

  ngOnInit() {
    this.maxItem = [];
    for (let i = 0; i < this.max; i++) {
        this.maxItem.push(i + 1);
    }
  }

  toggleRating(s: number) {
    console.log('click 1');
    this.ratedCount = s;
    this.onRating.emit(this.ratedCount);
    console.log('click 2');
  }


  clickEvent() {
      this.status = !this.status;
  }

}
