import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TravelstatesService } from '../../services/travelStates/travelstates.service';
import { travelObject } from '../../models/travelObject';
import { DatePipe } from '@angular/common'

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

export class EstadoViajeComponent implements AfterViewInit {
  displayedColumns: string[] = ['fecha','marca','modelo','estadoEquipo','estadoEnvio'];
  dataSource: MatTableDataSource<rowData>;

  @ViewChild(MatPaginator) paginator:any; //No se debe usar 'any' pero no funciona si no.
  @ViewChild(MatSort) sort:any;

  public viajes:travelObject[]=[];

  constructor(private travelState:TravelstatesService) {
    // Create users
    const userID:number=Number(localStorage.getItem('currentUser-id'));
    let respuesta:string;
    let data:rowData[]=[];
    
    // let newRow:rowData={
    //   fecha: new Date(),
    //   marca:'',
    //   modelo:'',
    //   estadoEnvio:'',
    //   estadoEquipo:'',
    // };
    this.travelState.getTravels(userID).subscribe(resp=>{
      respuesta=JSON.stringify(resp);
      this.viajes=JSON.parse(respuesta);
      for(let i=0;i<this.viajes.length;i++){
        data.push(createNewRow(this.viajes[i]));
      }
    })
    this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
//Funciones auxiliares
function setEstadoEquipo(n:number):string{
  if(n>=5)
    return("reparado");
  return("A reparar");
}
function createNewRow(param:travelObject):rowData{
  return{
    id:param.equipmentId,
    fecha:param.travelEquipmentDTOs[0].operationDate,
    marca:param.mark,
    modelo:param.model,
    estadoEquipo:setEstadoEquipo(param.travelEquipmentDTOs[0].statusTravel),
    estadoEnvio:estadoDelEnvio[param.travelEquipmentDTOs[0].statusTravel]
  };
}
