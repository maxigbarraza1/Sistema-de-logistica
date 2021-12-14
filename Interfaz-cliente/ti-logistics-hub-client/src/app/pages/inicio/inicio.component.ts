import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  public usuario:string=localStorage.getItem('currentUser-name') || '';
  constructor(public account:AccountService) { }

  ngOnInit(): void {
  }

}
