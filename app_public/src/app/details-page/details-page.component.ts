import { Component, OnInit } from '@angular/core';
import {RelaxDataService} from "../relax-data.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

import { Location } from '../location';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [RelaxDataService]
})
export class DetailsPageComponent implements OnInit {
  newLocation: Location;

  constructor(private relaxData: RelaxDataService,
              private route: ActivatedRoute) { }

      ngOnInit(): void {
        this.route.paramMap
      .switchMap((params: ParamMap) => {
          let id = params.get('locationId');
            return this.relaxData.getLocationById(id);
        }).subscribe( (newLocation: Location) => {
          this.newLocation = newLocation;
          this.pageContent.header.title = newLocation.name;
          this.pageContent.sidebar = `&nbsp;&nbsp;&nbsp;&nbsp;${newLocation.name} is on Realx, because the administration and staff of this institution, as well as an unforgettable atmosphere that envelops it from the inside, will not let you forget about visiting this institution.On this page you can get all the necessary information about this institution, as well as read reviews of people who were lucky enough, and maybe not very, to visit it.\n\n&nbsp;&nbsp;&nbsp;&nbsp;If you\'ve been and you like it - or if you don\'t - please leave a  review to help other people just like you.`;
      });
  }
  pageContent = {
  header : {
    title : '',
    strapline : ''
  },
  sidebar : ''

}
}
