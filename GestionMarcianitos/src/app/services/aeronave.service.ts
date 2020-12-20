import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

// Entities
import { Aeronave } from '../entities/aeronave';

@Injectable({
  providedIn: 'root'
})
export class AeronaveService {

  constructor(
    private httpService: HttpClient
  ) { }

  crearAeroNave(aeronave: Aeronave): Observable<any> {
    return this.httpService.post<Aeronave>('http://localhost:8000/aeronave', aeronave);
  }

  listarAeroNaves(): Observable<Aeronave[]>{
    return this.httpService.get<Aeronave[]>('http://localhost:8000/aeronave');
  }
}
