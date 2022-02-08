import { AfterViewInit, Component, ModuleWithComponentFactories, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TravelstatesService } from '../../services/travelStates/travelstates.service';
import { travelObject } from '../../models/travelObject';
import { tableInformation } from '../../models/tableInformation';
import { HistoryEquipmentService } from '../../services/historyDeviceState/history-equipment.service';
import { travelDTO } from '../../models/travelDTO.model';

let estadoDelEnvio=['Pend. a retirar','Retiro asignado','Retirado',
                    'Pend. de reparacion','Reparado','Entrega asignada',
                    'Pend. de entrega', 'Entregado', 'Recibido','Renunciado'
                   ]

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.sass']
})
export class HistorialComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['fecha','marca','modelo','estadoEquipo','estadoEnvio','fechaFin'];
  dataSource: MatTableDataSource<tableInformation>;

  @ViewChild(MatPaginator) paginator:any; //No se debe usar 'any' pero no funciona si no.
  @ViewChild(MatSort) sort:any;

  public historial:tableInformation[]=[];
  public idEquipos:number[]=[];

  userID:number=Number(localStorage.getItem('currentUser-id'));
  loading=false;
  constructor(private travelState:TravelstatesService, 
              private historyService:HistoryEquipmentService) 
  {
    this.loading=true;
    this.dataSource = new MatTableDataSource(this.historial);
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void {
    this.getIdEquiposCliente();
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

  getIdEquiposCliente(){
    this.travelState.getTravels(this.userID).subscribe(resp=>{
      let respuesta:string = JSON.stringify(resp);
      let viajes:travelObject[]=JSON.parse(respuesta);
      viajes.forEach(element => {
        this.getHistorialEquipo(element.equipmentId);
      });});
    }

    getHistorialEquipo(id:number){
    this.loading=true;
    this.historyService.getEquipmentTravel(id).subscribe(resp=>{
      let respuesta=JSON.stringify(resp);
      let historial:travelObject=JSON.parse(respuesta);
      this.historial.push(adaptarHistorial(historial));
      this.dataSource = new MatTableDataSource(this.historial);
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

function adaptarHistorial(param:travelObject):tableInformation{
  if(param.travelEquipmentDTOs[param.travelEquipmentDTOs.length-1].statusTravel == (7 | 8)){
    return{
      id:param.equipmentId,
      fecha:param.travelEquipmentDTOs[0].operationDate,
      marca:param.mark,
      modelo:param.model,
      estadoEquipo:setEstadoEquipo(param.travelEquipmentDTOs[param.travelEquipmentDTOs.length-1].statusTravel),
      estadoEnvio:estadoDelEnvio[param.travelEquipmentDTOs[param.travelEquipmentDTOs.length-1].statusTravel],
      fechaFin:param.travelEquipmentDTOs[param.travelEquipmentDTOs.length-1].operationDate,
    }
  }else{
    return{
      id:param.equipmentId,
      fecha:param.travelEquipmentDTOs[0].operationDate,
      marca:param.mark,
      modelo:param.model,
      estadoEquipo:setEstadoEquipo(param.travelEquipmentDTOs[param.travelEquipmentDTOs.length-1].statusTravel),
      estadoEnvio:estadoDelEnvio[param.travelEquipmentDTOs[param.travelEquipmentDTOs.length-1].statusTravel],
      fechaFin:"En curso"
    }
  }
}
