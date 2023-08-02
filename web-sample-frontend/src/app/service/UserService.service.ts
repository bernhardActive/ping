import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createUser(userDto: User): Observable<User> {
    console.log('posting to', `${this.apiUrl}/login/create`);
    return this.http.post<User>(`${this.apiUrl}/login/create`, userDto);
  }

  getUser(): Observable<User> {

    return this.http.get<User>(`${this.apiUrl}/login/user`);
  }

}
