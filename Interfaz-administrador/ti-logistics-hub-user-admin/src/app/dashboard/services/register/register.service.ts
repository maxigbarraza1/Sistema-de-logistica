import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../../models/register/registerUser.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  setUser(user:NewUser):Observable<NewUser>{
    return this.http.post<NewUser>('/api/Users',user);
  }
}
