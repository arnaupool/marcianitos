import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import {Historialmarciano} from '../entities/historialmarciano';


@Injectable({
  providedIn: 'root'
})
export class HistorialmarcianoService {

  constructor(
    private httpService: HttpClient
  ) { }

  crearHistorialMarciano(historial: Historialmarciano): Observable<Historialmarciano> {
    return this.httpService.post<Historialmarciano>('http://localhost:8000/historialMarciano', historial);
  }

  listarHistorialDeRevision(idRevision: number): Observable<Historialmarciano[]>{
    return this.httpService.get<Historialmarciano[]>('http://localhost:8000/historialMarciano/historialRevision/' + idRevision);
  }

  listarHistorialDeMarciano(idMarciano: number): Observable<Historialmarciano[]>{
    return this.httpService.get<Historialmarciano[]>('http://localhost:8000/historialMarciano/revisionAeronave/historialMarciano/' + idMarciano);
  }
}
