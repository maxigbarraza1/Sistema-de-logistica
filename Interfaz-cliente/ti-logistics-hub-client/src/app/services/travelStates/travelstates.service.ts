import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tableInformation } from '../../models/tableInformation';

@Injectable({
  providedIn: 'root'
})
export class TravelstatesService {

  constructor(private http:HttpClient) { }

  getTravels(clientId:number):Observable<tableInformation>{
    return this.http.get<tableInformation>("http://logistica.asambleas.cl/api/Equipment?clientId="+clientId);    
  }
}
