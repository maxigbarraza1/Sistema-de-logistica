import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/bfore-log/services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.sass']
})
export class NavMenuComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  cerrarSesion():void{
    localStorage.clear();
    this.router.navigate(['home']);
  }

}
