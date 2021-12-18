import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../bfore-log/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public usuario:string='';

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    
    let aux=localStorage.getItem('currentUser-name')?.split(" ",1) || " ";
    this.usuario=aux[0];
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  cerrarSesion():void{
    localStorage.clear();
    this.router.navigate(['home']);
    this.authService.userIsLoged=false;
  }

}
