import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Navenodriza} from '../entities/navenodriza';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavenodrizaService {

  constructor(
    private httpService: HttpClient
  ) { }

  crearNave(nave: Navenodriza) {
    return this.httpService.post('http://localhost:8000/naveNodriza', nave);
  } 

  listarNaves(): Observable<Navenodriza[]>{
    return this.httpService.get<Navenodriza[]>('http://localhost:8000/naveNodriza' + idAeronave);
  }
}
