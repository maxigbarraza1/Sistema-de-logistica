import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { NewUser } from '../../models/register/registerUser.model';
import { RegisterService } from '../../services/register/register.service';

const roles=[]=[
  {id:2,name:"Cadete",isDeleted:0},
  {id:3,name:"Usuario final",isDeleted:0},
];

const vehiculos=[]=[
  {id:1,name:"Bicicleta",isDeleted:0},
  {id:2,name:"Motocicleta",isDeleted:0},
  {id:3,name:"Automovil",isDeleted:0},
];

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.sass']
})
export class EditarUsuarioComponent implements OnInit {

  tipoUsuario:number=0;

  userForm= new FormGroup({
    user: new FormControl('',[Validators.required]),
    fullname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    mail: new FormControl('',[Validators.required,Validators.minLength(3), Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(3)]),
    address: new FormControl('',[Validators.required,Validators.minLength(3)]),
    phone: new FormControl('',[Validators.required,Validators.minLength(3)]),
    rol: new FormControl([Validators.required]),
    vehicle: new FormControl(''),
  });

  constructor(private registerService:RegisterService,
              public dialogRef: MatDialogRef<EditarUsuarioComponent>,) {
    
  }

  ngOnInit(): void {
  }

  cambiarTipoUsuario(param:number){
    this.tipoUsuario=param;
  }

  createNewUser():NewUser{
    let usuarioModificado=this.registerService.userModificado;
    usuarioModificado.email=this.userForm.value.mail;
    usuarioModificado.fullName=this.userForm.value.fullname;
    usuarioModificado.password=this.userForm.value.password;
    usuarioModificado.address=this.userForm.value.address;
    usuarioModificado.cellPhone=this.userForm.value.phone as string;
    usuarioModificado.rol=roles[this.userForm.value.user];
    usuarioModificado.vehicle=null;
    if(usuarioModificado.rol==roles[0])
      usuarioModificado.vehicle=vehiculos[this.userForm.value.vehicle-1];
    console.log("Los datos del usuario modificado son: ")
    console.log(usuarioModificado);
    return usuarioModificado;
  }
  

  onSubmit():void{
    this.registerService.setUser(this.createNewUser()).subscribe(
      resp=>{
        Swal.fire({
          icon: 'success',
          title: 'El usuario fue modificado con exito',
          showConfirmButton: false,
          timer: 1500
        })
        this.onNoClick();
        console.log("Usuario enviado con exito");
      }
    )
  }

  onNoClick():void{
    this.dialogRef.close();
  }

}
