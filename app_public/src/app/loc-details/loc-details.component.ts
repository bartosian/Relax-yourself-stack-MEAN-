import {Component, Input, OnInit} from '@angular/core';
import {Location, Review} from '../location';
import {RelaxDataService} from "../relax-data.service";

@Component({
  selector: 'app-loc-details',
  templateUrl: './loc-details.component.html',
  styleUrls: ['./loc-details.component.css'],
  providers:[RelaxDataService]
})
export class LocDetailsComponent  {
  @Input() location: Location;
  formVisible: boolean = false;
  formError: string;

  constructor( private dataRelax: RelaxDataService) { }

  public newReview: Review = {
    author : '',
    rating: 5,
    reviewText: ''

  };
  private formIsValid(): boolean {
  if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
  return true;
  } else {
  return false;
  }
  }

  private resetAndHideReviewForm(): void {
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }
  public onReviewSubmit():void {
    this.formError = '';
    if (this.formIsValid()) {
      this.dataRelax.addReviewByLocationId(this.location._id, this.newReview)
        .then((review: Review)=> {
          this.location.reviews.unshift(review);
           this.resetAndHideReviewForm();
        });
    } else {
      this.formError = 'All fields required, please try again';
    }
  }



  ngOnInit() {
  }

}
