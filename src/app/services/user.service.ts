import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders, HttpResponse } from '../../../node_modules/@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    //  'Content-Type': 'application/json',
    // 'Accept-Content': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
 // user: Observable<User>;
// logedUser: Observable<User>;
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  addUser(user: User): void {
    this.http.post('http://localhost:8080/CourseHub/api/users', user).subscribe(console.log);
  }

 /*  logUser(user: User): void {
    //    return this.http.post<User>('http://localhost:8080/CourseHub/api/users/login', user, httpOptions);
    this.http.post('http://localhost:8080/CourseHub/api/users/login', user, httpOptions).toPromise().
    .then(response => response.json().data)
    .catch(e => this.handleError(e));
  } */

  logUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/CourseHub/api/users/login', user, httpOptions);
  }
}
