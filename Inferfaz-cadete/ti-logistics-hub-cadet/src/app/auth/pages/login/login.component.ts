import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserLoged } from '../../models/intf_userLoged';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loading=false;

  constructor(private loginservice:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  public userlog:UserLoged={
    email:'',
    password:'',
  }
  registerForm = new FormGroup({
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  onSubmit(){
    this.loading=true;
    this.userlog=this.registerForm.value;
    this.loginservice.login(this.userlog.email,this.userlog.password).subscribe(
      resp=>{
        if(resp.rol.id='2'){
          localStorage.setItem('currentUser-id', JSON.stringify(resp.id));
          localStorage.setItem('currentUser-name', resp.fullName);
          localStorage.setItem('currentUser-email', resp.email);
          localStorage.setItem('currentUser-address',resp.address);
            
          this.loginservice.isLoggedIn=true;
          this.loading=false;
          if(this.loginservice.isLoggedIn=true)
            this.router.navigate(['../dashboard']);
            Swal.fire({
              icon: 'success',
              title: '¡Sesión iniciada con exito!',
              showConfirmButton: false,
              timer: 2000
            })
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡No estas dado de alta como Cadete! Comunicate con soporte para pedir que te den de alta'
          })
        }
      }, error =>{
        this.loading=false;
        if(error.status='404'){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Al parecer los datos ingresados son incorrectos. ¡Intentalo de nuevo!'
          })
        }
      })
  }
}