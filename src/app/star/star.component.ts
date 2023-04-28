import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  cropWidth = 75;
  @Output() ratingClicked = new EventEmitter<string>();

  ngOnChanges(): void {
    // eslint-disable-next-line prettier/prettier
    this.cropWidth = this.rating * (75 / 5);
  }

  onClick(): void {
    this.ratingClicked.emit(this.rating.toString());
  }
}
