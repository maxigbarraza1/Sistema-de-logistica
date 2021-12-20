import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserLoged } from '../../models/userLoged.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService, private _snackBar: MatSnackBar, private router:Router) { }

  userLoged:UserLoged={
    email:'',
    password:'',
  };

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  ngOnInit(): void {
  }

  openSnackBar(text:string, buttonText:string) {
    this._snackBar.open(text, buttonText, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }

  onSubmit(){
    this.userLoged=this.signInForm.value;
    this.authService.login(this.userLoged.email,this.userLoged.password).subscribe(
      user=>{
        if(user.rol.name=="Administrador"){
          localStorage.setItem('currentUser-id', JSON.stringify(user.id));
          localStorage.setItem('currentUser-name', user.fullName);
          localStorage.setItem('currentUser-email', user.email);
          this.router.navigate(['../dashboard']);
          this.openSnackBar("Usuario ingresado con exito","Ok")
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Al parecer no eres un administrador y esta pagina es solo para administradores del sitio.'
          })
        }
      },error=>{
        if(error='404'){
          this.openSnackBar("Al parecer los datos ingresados son incorrectos","Entiendo")
        }
      }
    )
  }

}
