import { Injectable } from '@angular/core';
import { Viaje } from '../models/travel.model';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostViaje } from '../models/postViaje.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  constructor(private http:HttpClient){ }

  // viajesPendientes=this.http.get<Viaje>("api/Travel/2/1");
  // viajesReparados=this.http.get<Viaje>("api/Travel/2/5");

  getPendientes():Observable<Viaje[]>{
    return this.http.get<Viaje[]>("api/Travel/2/1");
  }
  getReparados():Observable<Viaje[]>{
    return this.http.get<Viaje[]>("api/Travel/2/5");
  }


  getRetirosAsignado():Observable<Viaje[]>{
    return this.http.get<Viaje[]>("api/Travel/2/2");
  }
  getRetirados():Observable<Viaje[]>{
    return this.http.get<Viaje[]>("api/Travel/2/3");
  }
  getEntregasAsignadas():Observable<Viaje[]>{
    return this.http.get<Viaje[]>("api/Travel/2/6");
  }
  getPendienteEntrega():Observable<Viaje[]>{
    return this.http.get<Viaje[]>("api/Travel/2/7");
  }

  getViajesEntregadosLaboratorio():Observable<Viaje[]>{
    return this.http.get<Viaje[]>("api/Travel/2/4");
  }
  getViajesEntregadosCliente():Observable<Viaje[]>{
    return this.http.get<Viaje[]>("api/Travel/2/8");
  }

  tomarViaje(update:Viaje):Observable<Viaje>{
    return this.http.post<Viaje>("api/Travel?travelId="+update.id+"&statusTravel="+(update.lastStatusTravel+1)+
                          "&userOperation="+2+"&cadeteId="+Number(localStorage.getItem('currentUser-id'))+"&isReasigned=false",{});
  }

  rechazarViaje(viaje:Viaje):Observable<Viaje>{
    return this.http.post<Viaje>("api/Travel?travelId="+viaje.id+"&statusTravel="+10+
                          "&userOperation="+2+"&cadeteId="+Number(localStorage.getItem('currentUser-id'))+"&isReasigned=true",{});
  }

  entregarViaje(viaje:Viaje):Observable<Viaje>{
    if(viaje.lastStatusTravel<5){
      return this.http.post<Viaje>("api/Travel?travelId="+viaje.id+"&statusTravel="+4+
                          "&userOperation="+2+"&cadeteId="+Number(localStorage.getItem('currentUser-id'))+"&isReasigned=true",{});
    }else{
      return this.http.post<Viaje>("api/Travel?travelId="+viaje.id+"&statusTravel="+8+
                          "&userOperation="+2+"&cadeteId="+Number(localStorage.getItem('currentUser-id'))+"&isReasigned=true",{});
    }
  }


}
