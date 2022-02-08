import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tableInformation } from '../../models/tableInformation';
import { travelObject } from '../../models/travelObject';

@Injectable({
  providedIn: 'root'
})
export class HistoryEquipmentService {

  constructor(private http:HttpClient) { }

  getEquipmentTravel(deviceId:number):Observable<travelObject>{
    return this.http.get<travelObject>("api/Equipment/"+deviceId);
  }
}
