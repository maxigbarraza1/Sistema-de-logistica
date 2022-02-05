import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public isLoggedIn=true;
  constructor(private http:HttpClient, private router:Router) { }

  login(username:string,password:string): Observable<User>{
    return this.http.get<User>("http://logistica.asambleas.cl/api/Login?email="+username+"&password="+password);    
  }

  logout(){
    localStorage.clear();
    this.isLoggedIn=false;
    this.router.navigate(['inicio']);
  }
}
