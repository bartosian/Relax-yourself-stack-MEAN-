import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Location } from './location';

import 'rxjs/add/operator/toPromise';
import {Review} from "./location";

@Injectable()
export class RelaxDataService {

  constructor(private http: HttpClient) { }
  apiBaseUrl: string = 'http://localhost:3000/api/';

  public getLocations(): Promise<Location[]> {
    const url: string = `${this.apiBaseUrl}locations`;
    return this.http
      .get(url)
      .toPromise()
      .catch(this.handleError);
  }
  public getLocationById(locationid: string): Promise<Location> {
    const url: string = `${this.apiBaseUrl}locations/${locationid}`;
    return this.http
      .get(url)
      .toPromise()
      .catch(this.handleError);
  }


  public addReviewByLocationId(locationid: string, data: Review)  {
    const url: string = `${this.apiBaseUrl}locations/${locationid}/reviews`;
    return this.http
      .post(url, data)
      .toPromise()
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
