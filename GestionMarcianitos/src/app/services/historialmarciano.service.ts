import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistorialmarcianoService {

  constructor(
    private http: HttpClient
  ) { }
}
