import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tableInformation } from '../../models/tableInformation';

@Injectable({
  providedIn: 'root'
})
export class HistoryEquipmentService {

  constructor(private http:HttpClient) { }

  getEquipmentTravel(deviceId:number):Observable<tableInformation>{
    return this.http.get<tableInformation>("api/Equipment/"+deviceId);
  }
}
