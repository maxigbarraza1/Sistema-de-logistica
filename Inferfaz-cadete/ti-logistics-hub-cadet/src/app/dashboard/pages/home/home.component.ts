import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  nombreUsuario:string='';

  ngOnInit(): void {
    this.nombreUsuario=localStorage.getItem('currentUser-name') as string;
  }

  logout():void{
    this.accountService.logout();
  }

}
