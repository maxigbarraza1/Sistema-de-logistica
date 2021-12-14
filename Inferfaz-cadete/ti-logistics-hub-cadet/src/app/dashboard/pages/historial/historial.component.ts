import { Component, OnInit } from '@angular/core';
import { Viaje } from '../../models/travel.model';
import { DataService } from '../../services/data.service';
import { AccountService } from '../../services/account.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.sass']
})
export class HistorialComponent implements OnInit {

  public historial:Viaje[]=[];
  constructor(private dataService:DataService, private accountService:AccountService) { }

  ngOnInit(): void {
    let idCadete:number=Number(localStorage.getItem('currentUser-id'));
    this.dataService.getViajesEntregadosLaboratorio().pipe(
      map(data=>data.filter(viaje=> viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length-1].cadete?.id===idCadete))
      ).subscribe(entregadosLaboratorio=>this.historial=entregadosLaboratorio);

    this.dataService.getViajesEntregadosCliente().pipe(
      map(data=>data.filter(viaje=> viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length-1].cadete?.id===idCadete))
      ).subscribe(entregadosCliente=>{
        this.historial=this.historial.concat(entregadosCliente);
        this.historial.sort(function(a,b){
          return new Date(a.creationDate).valueOf() - new Date(b.creationDate).valueOf();
        });
      });
  }
  
  logout():void{
    this.accountService.logout();
  }
}
