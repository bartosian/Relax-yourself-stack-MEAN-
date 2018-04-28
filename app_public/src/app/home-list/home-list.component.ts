import { Component, OnInit } from '@angular/core';
import {RelaxDataService} from "../relax-data.service";

export class Location {
  name: string;
  address: string;
  rating: number;
  facilities: [string];
  _id: string;
  images: [string];
  position: [number];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [RelaxDataService]
})
export class HomeListComponent implements OnInit {

  locations: Location[];

  constructor(private relaxData: RelaxDataService) { }


  private getLocations(): void {
    this.relaxData
      .getLocations()
      .then(newLocations => this.locations = newLocations);
  }

  ngOnInit() {
    this.getLocations();
  }
}
