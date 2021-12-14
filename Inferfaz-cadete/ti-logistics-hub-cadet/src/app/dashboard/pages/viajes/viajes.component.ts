import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { ConnectableObservable, forkJoin, map, Observable, Observer } from 'rxjs';
import { Viaje } from '../../models/travel.model';
import { DataService } from '../../services/data.service';
import { InfoTarjeta } from '../../models/tarjetaViaje.model';
import { AccountService } from '../../services/account.service';



@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.sass']
})
export class ViajesComponent implements OnInit {

  public aceptados:Viaje[]=[];
  public disponibles:Viaje[]=[];  

  public selectOption:number=1;
  constructor(private dataService:DataService, private accountService:AccountService) {
  }
  
  ngOnInit(): void {
    let idCadete:number=Number(localStorage.getItem('currentUser-id'));
    //(Number(localStorage.getItem('currentUser-id')));
    
    this.dataService.getReparados().subscribe(
      viajesReparados=>this.disponibles=viajesReparados);
    this.dataService.getPendientes().subscribe(
      viajesPendientes=>{
        this.disponibles=this.disponibles.concat(viajesPendientes)
        this.disponibles.sort(function(a,b){
          return new Date(a.creationDate).valueOf() - new Date(b.creationDate).valueOf();
        });
      });

    this.dataService.getRetirosAsignado().pipe(
      map(data=>data.filter(viaje=> viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length-1].cadete?.id===idCadete))
                      ).subscribe(resp=>this.aceptados=resp);

    this.dataService.getRetirados().pipe(
      map(data=>data.filter(viaje=> viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length-1].cadete?.id===idCadete))
                      ).subscribe(resp=>this.aceptados=this.aceptados.concat(resp));

    this.dataService.getEntregasAsignadas().pipe(
      map(data=>data.filter(viaje=> viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length-1].cadete?.id===idCadete))
                      ).subscribe(resp=>this.aceptados=this.aceptados.concat(resp));

    this.dataService.getPendienteEntrega().pipe(
      map(data=>data.filter(viaje=> viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length-1].cadete?.id===idCadete))
                      ).subscribe(resp=>this.aceptados=this.aceptados.concat(resp));
    
  }

  changeOption(param:number){
    this.selectOption=param;
    console.log(this.selectOption);
    this.ngOnInit();

  }
  logout():void{
    this.accountService.logout();
  }
}
