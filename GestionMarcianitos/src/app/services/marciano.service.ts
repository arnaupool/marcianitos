import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcianoService {

  constructor(
    private http: HttpClient
  ) { }
/*
  crearMarciano(){
    this.http.post('/marciano',);
  } */
}
