import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { viaje } from '../../models/estado-viaje.model';
import { SetTravelService } from '../../services/setTravel/set-travel.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.component.html',
  styleUrls: ['./solicitar-viaje.component.sass']
})
export class SolicitarViajeComponent implements OnInit {

  nuevoViaje:viaje={
    marca:'',
    modelo:'',
    falla:'',
  }
  constructor(private travelService:SetTravelService) { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    marca: new FormControl('',[Validators.required, Validators.minLength(3)]),
    modelo: new FormControl('',[Validators.required,Validators.minLength(3)]),
    falla: new FormControl('',[Validators.required,Validators.minLength(5)]),
    direccion: new FormControl('',[Validators.required,Validators.minLength(5)]),
    fecha: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  onSubmit(formDirective:FormGroupDirective) {
    this.nuevoViaje.marca=this.registerForm.value.marca;
    this.nuevoViaje.modelo=this.registerForm.value.modelo;
    this.nuevoViaje.falla=this.registerForm.value.falla;
    let id:number=Number(localStorage.getItem('currentUser-id'));
    formDirective.resetForm();
    this.travelService.save(id,this.nuevoViaje).subscribe(resp=>{
      console.log(this.nuevoViaje);
      Swal.fire({
        icon: 'success',
        title: '¡Tu solicitud de viaje ha sido enviada con exito!',
        showConfirmButton: false,
        timer: 2000
      })
      
    })
  }

}
