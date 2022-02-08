import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TravelstatesService } from '../../services/travelStates/travelstates.service';
import { travelObject } from '../../models/travelObject';
import { DatePipe } from '@angular/common'
import { tableInformation } from '../../models/tableInformation';

export interface rowData {
  id?:number,
  fecha:Date,
  marca:string,
  modelo:string,
  estadoEquipo:string,
  estadoEnvio:string,
  fechaFin?:Date
}

let estadoDelEnvio=['Pend. a retirar','Retiro asignado','Retirado',
                    'Pend. de reparacion','Reparado','Entrega asignada',
                    'Pend. de entrega', 'Entregado', 'Recibido','Renunciado'
                   ]

@Component({
  selector: 'app-estado-viaje',
  templateUrl: './estado-viaje.component.html',
  styleUrls: ['./estado-viaje.component.sass']
})

export class EstadoViajeComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['fecha','marca','modelo','estadoEquipo','estadoEnvio'];
  dataSource: MatTableDataSource<tableInformation>;

  @ViewChild(MatPaginator) paginator:any; //No se debe usar 'any' pero no funciona si no.
  @ViewChild(MatSort) sort:any;

  public viajes:tableInformation[]=[];
  userID:number=Number(localStorage.getItem('currentUser-id'));
  loading=false;


  constructor(private travelState:TravelstatesService) {
    this.loading=true;
    this.dataSource = new MatTableDataSource(this.viajes);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getViajes();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getViajes(){
    this.loading=true;
    this.travelState.getTravels(this.userID).subscribe(resp=>{
      let respuesta=JSON.stringify(resp);
      let viajes:travelObject[]=JSON.parse(respuesta);
      viajes.forEach(element => {
        this.viajes.push(adaptarViajes(element));
      });
      this.dataSource = new MatTableDataSource(this.viajes);
      this.dataSource.paginator = this.paginator;
      this.loading=false;
    })
  }
}
//Funciones auxiliares
function setEstadoEquipo(n:number):string{
  if(n>=5)
    return("reparado");
  return("A reparar");
}

function adaptarViajes(param:travelObject):tableInformation{
  return{
    id:param.equipmentId,
    fecha:param.travelEquipmentDTOs[0].operationDate,
    marca:param.mark,
    modelo:param.model,
    estadoEquipo:setEstadoEquipo(param.travelEquipmentDTOs[0].statusTravel),
    estadoEnvio:estadoDelEnvio[param.travelEquipmentDTOs[0].statusTravel]
  };
}
