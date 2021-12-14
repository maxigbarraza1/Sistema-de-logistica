import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.sass']
})
export class HeaderLandingComponent implements OnInit {

  constructor(private router:Router, public account:AccountService) { }

  
  ngOnInit(): void {
  }
  
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  logout(){
    this.account.logout();
  }
}
