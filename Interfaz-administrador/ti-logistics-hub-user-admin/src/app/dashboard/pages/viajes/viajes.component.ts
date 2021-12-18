import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Viaje } from '../../models/viajes/travel.model';
import {MatTableDataSource,} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { forkJoin, map } from 'rxjs';
import { ModifyTravel } from '../../models/viajes/modifyTravel.model';

const estadoDelEnvio=['Pend. a retirar','Retiro asignado','Retirado',
                    'Pend. de reparacion','Reparado','Entrega asignada',
                    'Pend. de entrega', 'Entregado', 'Recibido','Renunciado'
                   ]

export interface rowData{
  idViaje:number,
  estado:number,
  cliente:string,
  direccion:string,
  estadoActual:string,
}

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.sass']
})
export class ViajesComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['cliente','direccion','actual','estado'];
  dataSource:MatTableDataSource<rowData>;

  @ViewChild(MatPaginator) paginator:any;

  public data:Viaje[]=[];
  public datosTabla:rowData[]=[];

  public selectOption:number=1;
  public travelOption:number=-1;

  constructor(private dataService:DataService) {
    // this.ngOnInit();
    this.dataSource = new MatTableDataSource(this.datosTabla);
    this.dataSource.paginator=this.paginator;
  }


  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
  }

  changeOption(param:number){
    this.selectOption=param;
    this.ngOnInit();
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

    forkJoin([estado1,estado2,estado3,estado4,estado5,estado6,estado7,estado8]).pipe(
      map(([estado1,estado2,estado3,estado4,estado5,estado6,estado7,estado8])=>[...estado1,...estado2,...estado3,...estado4,...estado5,...estado6,...estado7,...estado8])
    ).subscribe(data=>{
      if(this.selectOption==1){
        this.datosTabla=[];
        for(let i=0;i<data.length;i++){
          if(data[i].lastStatusTravel>=1 && data[i].lastStatusTravel<=8)
            this.datosTabla.push(createNewRow(data[i]));
        }
        this.dataSource = new MatTableDataSource(this.datosTabla);
        this.dataSource.paginator=this.paginator;
        console.log(this.datosTabla);
      }else{
        if(this.selectOption==2){
          this.datosTabla=[];
          for(let i=0;i<data.length;i++){
            if(data[i].lastStatusTravel==1 || data[i].lastStatusTravel==5)
              this.datosTabla.push(createNewRow(data[i]));
          }
          this.dataSource = new MatTableDataSource(this.datosTabla);
          this.dataSource.paginator=this.paginator;
          console.log(this.datosTabla);
        }else{
          this.datosTabla=[];
          for(let i=0;i<data.length;i++){
            if(data[i].lastStatusTravel==2 || data[i].lastStatusTravel==3 ||
              data[i].lastStatusTravel==6 || data[i].lastStatusTravel==7)
              this.datosTabla.push(createNewRow(data[i]));
          }
          this.dataSource = new MatTableDataSource(this.datosTabla);
          this.dataSource.paginator=this.paginator;
          console.log(this.datosTabla);
        }
      }
    })
  }

  cambiarEstado(param:number, data:rowData){
    this.travelOption=param;
    this.modificarEstado(data);
    this.ngOnInit();
  }

  modificarEstado(param:rowData){
    let cadete:number= Number(prompt("Ingrese el id del cadete a asignar", "0 si no posee cadete"));
    let modificacion:ModifyTravel={
      idViaje:param.idViaje,
      newStatusTravel:this.travelOption,
      userOperation:1,
      idCadete:cadete,
      isReasigned:false,
      observations:"El administrador ha modificado este viaje",
    }
    console.log("estoy modificando el estado");
    console.log(modificacion);
    this.dataService.modificarViaje(modificacion).subscribe(resp=>{
      console.log("Viaje modificado con exito");
    },error=>{
      //hacer un sweet alert con el error
    }
    );
  }

}


function createNewRow(param:Viaje):rowData{
  return{
    idViaje:param.id,
    estado:param.lastStatusTravel,
    cliente:param.travelEquipmentDTOs[param.travelEquipmentDTOs.length-1].equipment.cliente.fullName,
    direccion:param.travelEquipmentDTOs[param.travelEquipmentDTOs.length-1].equipment.cliente.address,
    estadoActual:estadoDelEnvio[param.lastStatusTravel-1],
  }
}