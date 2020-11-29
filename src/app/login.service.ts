import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_API_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    
  }

  login(username: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': "*"
      })
    };
    return this.http.post('./api/authenticate',
    {password:'admin',username:'admin'},
    httpOptions).subscribe(req => {
      console.log("inside login POST");
      console.log(req);
    })
  }
}
