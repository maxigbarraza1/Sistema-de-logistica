import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private router:Router, private auth:AuthService) { }

  logout(){
    localStorage.clear();
    this.auth.isLoggedIn=false;
    this.router.navigate(['auth/inicio'])
  }
}
