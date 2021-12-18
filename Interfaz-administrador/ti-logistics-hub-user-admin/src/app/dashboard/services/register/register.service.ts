import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../../models/register/registerUser.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public userModificado:NewUser={
    id:           0,
    email:        '',
    fullName:     '',
    address:      '',
    cellPhone:    '',
    isAccepted:   true,
    isDeleted:    false,
    observations: '',
    password:     '',
    vehicle:     null,
    rol:         {
      id:0,
      name:'',
      isDeleted:undefined,
    },
  };

  constructor(private http:HttpClient) { }

  setUser(user:NewUser):Observable<NewUser>{
    return this.http.post<NewUser>('/api/Users',user);
  }
}
