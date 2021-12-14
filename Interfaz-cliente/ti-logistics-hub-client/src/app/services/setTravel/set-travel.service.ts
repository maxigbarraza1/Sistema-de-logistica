import { Injectable } from '@angular/core';
import { viaje } from 'src/app/models/estado-viaje.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetTravelService {

  constructor(private http:HttpClient) { }
  save(id:number,viaje:viaje): Observable<viaje>{
    console.log("Viaje enviado a la base de datos ")//alert
    return this.http.post<viaje>('/api/Retirement?clientId='+id+'&mark='+viaje.marca+
                                  '&model='+viaje.modelo+'&failure='+viaje.falla, viaje);
  }
}
