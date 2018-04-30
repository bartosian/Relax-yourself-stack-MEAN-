import { Component, OnInit } from '@angular/core';
import {RelaxDataService} from "../relax-data.service";

import { Location } from '../location';

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
