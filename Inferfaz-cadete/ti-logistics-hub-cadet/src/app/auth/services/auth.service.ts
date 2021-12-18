import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/intf_user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn=false;
  constructor(private http:HttpClient) { }

  login(username:string,password:string): Observable<User>{
    return this.http.get<User>("api/Login?email="+username+"&password="+password);
  }
}
