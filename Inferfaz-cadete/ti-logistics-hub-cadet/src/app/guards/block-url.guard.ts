import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlockUrlGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.auth.isLoggedIn){
      this.router.navigate(['/auth']);
    }
    // else{
    //   this.router.navigate(['/dashboard']);
    // }
    return this.auth.isLoggedIn;
  }
  
}
