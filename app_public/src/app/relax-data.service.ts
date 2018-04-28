import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Location } from './home-list/home-list.component';

import 'rxjs/add/operator/toPromise';

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
  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
