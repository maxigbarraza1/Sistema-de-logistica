import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../bfore-log/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoutesGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.authService.userIsLoged()){
      this.router.navigate(['/auth']);
    };
    return this.authService.userIsLoged();
  }
  
}
