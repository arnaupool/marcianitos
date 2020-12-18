import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

// Entities
import { Marciano } from '../entities/marciano';


@Injectable({
  providedIn: 'root'
})
export class MarcianoService {

  constructor(
    private httpService: HttpClient
  ) { }
  crearMarciano(marciano: Marciano) {
    return this.httpService.post('http://localhost:8000/marciano', marciano);
  } 

  listarMarciano(){
    return this.httpService.get
  }
}
