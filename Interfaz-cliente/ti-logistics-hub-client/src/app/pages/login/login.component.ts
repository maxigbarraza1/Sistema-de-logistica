import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account.service';
import { UserLoged } from '../../models/userLoged.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private account:AccountService, private router:Router) { }

  ngOnInit(): void {
  }
  userlog:UserLoged={
    email:'',
    password:'',
  }
  registerForm = new FormGroup({
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  onSubmit() {
    this.userlog=this.registerForm.value;
    this.account.login(this.userlog.email,this.userlog.password).subscribe(
      resp=>{
        // console.log(resp); me dice que datos me trae del usuario
        localStorage.setItem('currentUser-id', JSON.stringify(resp.id));
        localStorage.setItem('currentUser-name', resp.fullName);
        localStorage.setItem('currentUser-email', resp.email);
        localStorage.setItem('currentUser-address',resp.address);

        this.account.isLoggedIn=true;
        if(this.account.isLoggedIn=true){
          this.router.navigate(['inicio']);
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: '¡Sesión iniciada con exito!',
            showConfirmButton: false,
            timer: 2000
          })
        }
      }, error =>{
        console.log(error);
        if(error.status='404')
          console.log('contrasena papu')//Hacer un ALERT QUE LE ERRO EN LOS DATOS
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Al parecer los datos ingresados son incorrectos. ¡Intentalo de nuevo!'
          })
      }
    )        
  }
}
