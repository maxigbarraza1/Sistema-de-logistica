import {AfterViewInit, Component, ModuleWithComponentFactories, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TravelstatesService } from '../../services/travelStates/travelstates.service';
import { travelObject } from '../../models/travelObject';
import { tableInformation } from '../../models/tableInformation';
import { HistoryEquipmentService } from '../../services/historyDeviceState/history-equipment.service';
import { travelDTO } from '../../models/travelDTO.model';

export interface rowData {
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
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.sass']
})
export class HistorialComponent implements AfterViewInit {
  displayedColumns: string[] = ['fecha','marca','modelo','estadoEquipo','estadoEnvio','fechaFin'];
  dataSource: MatTableDataSource<rowData>;

  @ViewChild(MatPaginator) paginator:any; //No se debe usar 'any' pero no funciona si no.
  @ViewChild(MatSort) sort:any;

  public viajes:travelObject[]=[];
  public historial:travelObject[]=[];

  constructor(private travelState:TravelstatesService, private historyService:HistoryEquipmentService) {
    // Create users
    const userID:number=Number(localStorage.getItem('currentUser-id'));
    let respuesta:string;
    let respuestaEquipment:string;
    let data:rowData[]=[];
    let dataEquipment:rowData[]=[];
    let equipmentId:number;

    let row:rowData={
      fecha:new Date(" "),
      marca:'',
      modelo:'',
      estadoEquipo:'',
      estadoEnvio:'',
      fechaFin:new Date("" )
    }
  
    this.travelState.getTravels(userID).subscribe(resp=>{
      respuesta=JSON.stringify(resp);
      this.viajes=JSON.parse(respuesta);
      for(let i=0;i<this.viajes.length;i++){
        data.push(insertUserData(this.viajes[i]));
      }
    })

    this.historyService.getEquipmentTravel(31).subscribe(resp=>{
      respuestaEquipment=JSON.stringify(resp);
      this.historial=JSON.parse(respuestaEquipment);
        row.fecha = this.historial[0].travelEquipmentDTOs[0].operationDate;
        row.marca= this.historial[0].mark;
        row.modelo=this.historial[0].model;
        row.estadoEnvio=estadoDelEnvio[this.historial[0].travelEquipmentDTOs[length].statusTravel]+1;
        row.estadoEquipo=setEstadoEquipo(this.historial[0].travelEquipmentDTOs[length].statusTravel);
        row.fechaFin=this.historial[0].travelEquipmentDTOs[length].operationDate;
        dataEquipment.push(row);
    })

    console.log(dataEquipment);
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

function setEstadoEnvio(param:travelDTO[]):string{
  let status=0
  param.forEach(elemento => {
    status=elemento.statusTravel
  })
  return estadoDelEnvio[status];
}

function setFechaFin(param:travelObject):Date{
  let estado=0;
  for(let i=0;i<param.travelEquipmentDTOs.length;i++){
    estado=param.travelEquipmentDTOs[i].statusTravel;
  }
  if(estado<9)
    return new Date();
  return param.travelEquipmentDTOs[9].operationDate
}

function insertUserData(param:travelObject):rowData{
  return{
    fecha:param.travelEquipmentDTOs[0].operationDate,
    marca:param.mark,
    modelo:param.model,
    estadoEquipo:setEstadoEquipo(param.travelEquipmentDTOs[0].statusTravel),
    estadoEnvio:estadoDelEnvio[param.travelEquipmentDTOs[0].statusTravel],
    fechaFin:new Date(" "),
  };
}

function createNewRow(param:travelObject):rowData{
  return{
    fecha:new Date(" "),
    marca:param.mark,
    modelo:" ",
    estadoEquipo:" ",
    estadoEnvio:" ",
    fechaFin:new Date(" ")
  };
}
