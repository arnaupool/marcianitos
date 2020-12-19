import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

// Entities
import { Revision } from '../entities/revision';

@Injectable({
  providedIn: 'root'
})
export class RevisionService {

  constructor(
    private httpService: HttpClient
  ) { }

  crearRevision(revision: Revision): Observable<Revision> {
    return this.httpService.post<Revision>('http://localhost:8000/revision', revision);
  }

  listarRevision(): Observable<Revision[]>{
    return this.httpService.get<Revision[]>('http://localhost:8000/revision');
  }

  listarRevisionesAeronaves(idAeronave: number): Observable<Revision[]>{
    return this.httpService.get<Revision[]>('http://localhost:8000/revision/revisionAeronave/' + idAeronave);
  }
}
