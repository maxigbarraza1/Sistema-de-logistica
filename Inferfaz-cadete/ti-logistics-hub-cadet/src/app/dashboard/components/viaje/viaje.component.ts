import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Viaje } from '../../models/travel.model';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viaje',
  styleUrls: ['./viaje.component.sass'],
  templateUrl: './viaje.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ViajeComponent implements OnInit {
  public estadoDelEnvio=['Pend. a retirar','Retiro asignado','Retirado',
                    'Pend. de reparacion','Reparado','Entrega asignada',
                    'Pend. de entrega', 'Entregado', 'Recibido','Renunciado'
                    ];
  @Input() disponibles:Viaje[]=[];
  @Input() aceptados:Viaje[]=[];
  @Input() opcion:number=1;

  public viajesEnCurso:Viaje[]=[];

  constructor(private dataService:DataService) { }


  ngOnInit(): void {
  }

  getAceptados():Viaje[]{
    return this.aceptados;
  }

  tomarViajeDisponible(viaje:Viaje){
    this.dataService.tomarViaje(viaje).subscribe(
      resp=>{
        Swal.fire({
          icon:'success',
          title:'¡Viaje aceptado con exito! Recuerda que solo puedes aceptar 3 a la vez',
          timer:1500,
        })
      },error=>{  
        if(error=403){
          Swal.fire({
            icon:'error',
            title:'Oops...',
            text:'No pudimos asignarte este viaje. Comprueba que no estes superando el limite de los 3 viajes aceptado a la vez'
          })
        }
      });
  };

  addViajeiniciado(viaje:Viaje){
    if(viaje.lastStatusTravel==(2||3||7)){
      this.viajesEnCurso.push(viaje);
      localStorage.setItem('viajesEnCurso',JSON.stringify(this.viajesEnCurso));
    }
  };

  getViajesIniciados(){
    let resp=localStorage.getItem('viajesEnCurso') as string;
    if(resp!=''){
      return JSON.parse(resp);
    }
  }

  iniciarViaje(viaje:Viaje){
    this.dataService.tomarViaje(viaje).subscribe(
      resp=>{
        Swal.fire({
          icon:'success',
          title:'¡Viaje iniciado con exito! Recuerda conducir con cuidado.',
          timer:1500,
        })
        this.addViajeiniciado(viaje);
      },error=>{  
        if(error=403){
          Swal.fire({
            icon:'error',
            title:'Oops...',
            text:'No puedes iniciar este viaje. Contacta al soporte tecnico inmediato.'
          })
        }
      });
  };

  rechazarViaje(viaje:Viaje){
    this.dataService.rechazarViaje(viaje).subscribe(
      resp=>{
        Swal.fire({
          icon:'success',
          title:'¡Viaje rechazado con exito!',
          timer:1500,
        })
        // this.aceptadosLocal=this.aceptadosLocal.filter(e=>{e.id!=viaje.id});
      },error=>{
        if(error=403){
          Swal.fire({
            icon:'error',
            title:'Oops...',
            text:'¡No puedes rechazar este viaje! Ya tienes el equipo en tus manos.'
          })
        }
      }
    )
  };

  entregarPedido(viaje:Viaje){
    this.dataService.entregarViaje(viaje).subscribe(
      resp=>{
        Swal.fire({
          icon:'success',
          title:'¡Viaje marcado como entregado con exito!',
          timer:1500,
        })
        this.viajesEnCurso=this.viajesEnCurso.filter(e=>e.id!=viaje.id);
        localStorage.setItem('viajesEnCurso',JSON.stringify(this.viajesEnCurso));
      });
  };

}


