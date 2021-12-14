import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-trouble',
  templateUrl: './trouble.component.html',
  styleUrls: ['./trouble.component.sass']
})
export class TroubleComponent implements OnInit {

  constructor(private router:Router, private accountService:AccountService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    text: new FormControl('',[Validators.maxLength(250),Validators.minLength(10), Validators.required]),
  })

  onSubmit(){
    this.router.navigate(['/dashboard/home']);
    Swal.fire({
      icon: 'success',
      title: '¡Su incoveniente ha sido enviado con exito!',
      showConfirmButton: false,
      timer: 2000
    })
  }

  logout():void{
    this.accountService.logout();
  }

}
