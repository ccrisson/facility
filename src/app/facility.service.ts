import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_API_URL } from '../config';
@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) { }

  getFacilities(): void{
    console.log("before GET (getFaciilities())");
    this.http.get(BASE_API_URL + '/services/facilitymanager/api/facilities').subscribe(req => {
      console.log(req);
    })
    console.log("after GET (getFaciilities())");
  }
}
