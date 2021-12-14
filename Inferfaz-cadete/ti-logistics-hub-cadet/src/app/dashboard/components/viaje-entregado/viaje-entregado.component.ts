import { Component, Input, OnInit } from '@angular/core';
import { Viaje } from '../../models/travel.model';

@Component({
  selector: 'app-viaje-entregado',
  templateUrl: './viaje-entregado.component.html',
  styleUrls: ['./viaje-entregado.component.sass']
})
export class ViajeEntregadoComponent implements OnInit {
  public estadoDelEnvio=['Pend. a retirar','Retiro asignado','Retirado',
                    'Pend. de reparacion','Reparado','Entrega asignada',
                    'Pend. de entrega', 'Entregado', 'Recibido','Renunciado'
                    ];
  @Input() historial:Viaje[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  estadoEquipo(n:number):string{
    if(n<6)
      return "Sin reparar";
    return "Reparado"
  }

  estadoEntrega(viaje:Viaje):number{
    if(viaje.lastStatusTravel==9)
      return 1;
    if(viaje.lastStatusTravel==4)
      return 2;
    return 3;
  }

  estaRecibido(viaje:Viaje):boolean{
    if(viaje.lastStatusTravel==9)
      return true;
    else
      return false
  }

  recibidoPorLaboratorio(viaje:Viaje):boolean{
    if(viaje.lastStatusTravel==4)
      return true;
    return false;
  }

}
