import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viaje } from '../../models/viajes/travel.model';
import { Observable } from 'rxjs';
import { ModifyTravel } from '../../models/viajes/modifyTravel.model';
import { NewUser } from '../../models/register/registerUser.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  get(rol:number,estado:number):Observable<Viaje[]>{
    return this.http.get<Viaje[]>("/api/Travel/"+rol+"/"+estado);
  }

  modificarViaje(viaje:ModifyTravel):Observable<ModifyTravel>{
    return this.http.post<ModifyTravel>("api/Travel?travelId="+viaje.idViaje+"&statusTravel="+viaje.newStatusTravel+
    "&userOperation="+viaje.userOperation+"&cadeteId="+viaje.idCadete+"&isReasigned="+viaje.isReasigned,{});
  }

  getUsuarios():Observable<NewUser[]>{
    return this.http.get<NewUser[]>("api/Users?userOperation=1");
  }
}
