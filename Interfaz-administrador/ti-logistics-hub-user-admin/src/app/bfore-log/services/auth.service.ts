import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  userIsLoged():boolean{
    if(localStorage.getItem('currentUser-id')==null)
      return false;
    return true;
  }

  login(mail:string,password:string):Observable<User>{
    return this.http.get<User>("/api/Login?email="+mail+"&password="+password);
  }
}
