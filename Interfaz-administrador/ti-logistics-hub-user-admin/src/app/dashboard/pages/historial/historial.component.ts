import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { DataService } from '../../services/data/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { Viaje } from '../../models/viajes/travel.model';
import { MatPaginator } from '@angular/material/paginator';

export interface histData{
  cadete:string,
  cliente:string,
  fecha:Date,
  hora:Date,
  estado:string,
}

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.sass']
})
export class HistorialComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['cadete','cliente','fecha','hora','estado'];
  dataSource:MatTableDataSource<histData>;

  @ViewChild(MatPaginator) paginator:any;

  public data:Viaje[]=[];
  public datosTabla:histData[]=[];

  constructor(private dataService:DataService) {
    this.ngOnInit();
    this.dataSource = new MatTableDataSource(this.datosTabla);
    this.dataSource.paginator=this.paginator;
  }

  ngOnInit(): void {
    let estado1=this.dataService.get(1,1);
    let estado2=this.dataService.get(1,2);
    let estado3=this.dataService.get(1,3);
    let estado4=this.dataService.get(1,4);
    let estado5=this.dataService.get(1,5);
    let estado6=this.dataService.get(1,6);
    let estado7=this.dataService.get(1,7);
    let estado8=this.dataService.get(1,8);
    let estado9=this.dataService.get(1,9);

    forkJoin([estado1,estado2,estado3,estado4,estado5,estado6,estado7,estado8,estado9]).pipe(
      map(([estado1,estado2,estado3,estado4,estado5,estado6,estado7,estado8,estado9])=>[...estado1,...estado2,...estado3,...estado4,...estado5,...estado6,...estado7,...estado8,...estado9])
    ).subscribe(data=>{
        this.datosTabla=[];
        for(let i=0;i<data.length;i++){
            this.datosTabla.push(createNewRow(data[i]));
        }
        this.dataSource = new MatTableDataSource(this.datosTabla);
        this.dataSource.paginator=this.paginator;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}

function setEstado(param:number):string{
  if(param>=5)
    return("Reparado");
  return ("Sin reparar");
}
function createNewRow(param: Viaje): histData {
  return{
    cadete:param.travelEquipmentDTOs[param.travelEquipmentDTOs.length-1].cadete?.fullName || "Sin definir",
    cliente:param.travelEquipmentDTOs[param.travelEquipmentDTOs.length-1].equipment.cliente.fullName,
    fecha:param.travelEquipmentDTOs[param.travelEquipmentDTOs.length-1].operationDate,
    hora:param.travelEquipmentDTOs[param.travelEquipmentDTOs.length-1].operationDate,
    estado:setEstado(param.lastStatusTravel),
  }
}

