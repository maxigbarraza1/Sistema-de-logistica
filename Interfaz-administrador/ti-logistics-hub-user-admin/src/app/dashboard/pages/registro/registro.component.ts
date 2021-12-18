import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register/register.service';
import { NewUser } from '../../models/register/registerUser.model';


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
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})



export class RegistroComponent implements OnInit {

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
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  createNewUser():NewUser{
    let nuevoUsuario:NewUser={
      id:           0,
      email:        '',
      fullName:     '',
      address:      '',
      cellPhone:    '',
      isAccepted:   true,
      isDeleted:    false,
      observations: '',
      password:     '',
      vehicle:     null,
      rol:         {
        id:0,
        name:'',
        isDeleted:undefined,
      },
    };
    console.log("Los datos del form son: ")
    console.log(this.userForm.value);
    nuevoUsuario.email=this.userForm.value.mail;
    nuevoUsuario.fullName=this.userForm.value.fullname;
    nuevoUsuario.password=this.userForm.value.password;
    nuevoUsuario.address=this.userForm.value.address;
    nuevoUsuario.cellPhone=this.userForm.value.phone as string;
    nuevoUsuario.rol=roles[this.userForm.value.rol];
    nuevoUsuario.vehicle=null;
    if(nuevoUsuario.rol==roles[0])
      nuevoUsuario.vehicle=vehiculos[this.userForm.value.vehicle-1];
    console.log("Los datos del nuevo usuario son: ")
    console.log(nuevoUsuario);
    return nuevoUsuario;
  }

  onSubmit():void{
    this.registerService.setUser(this.createNewUser()).subscribe(
      resp=>{
        console.log("Usuario enviado con exito");
      }
    )
  }

}
