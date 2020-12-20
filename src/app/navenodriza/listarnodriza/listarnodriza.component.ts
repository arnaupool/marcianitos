import { Component, OnInit } from '@angular/core';

import {Navenodriza} from '../../entities/navenodriza';
import {NavenodrizaService} from '../../services/navenodriza.service';

@Component({
  selector: 'app-listarnodriza',
  templateUrl: './listarnodriza.component.html',
  styleUrls: ['./listarnodriza.component.css']
})
export class ListarnodrizaComponent implements OnInit {
  /*nodrizas = [
    { id: "NN-1", nombre: "Optimus"},
    { id: "NN-2", nombre: "Perseus"},
    { id: "NN-3", nombre: "Titanic"},
    { id: "NN-4", nombre: "Exobot"}
  ];*/
  nodrizas: Navenodriza[] = [];

  constructor(
    private navenodrizaService: NavenodrizaService
  ) { }

  ngOnInit(): void {
    this.listarNavesNodrizas();
  }

  listarNavesNodrizas(){
    this.navenodrizaService.listarNaves().subscribe(
     (res) => {
       this.nodrizas = res as Navenodriza[];
       console.log(this.nodrizas);
     }
   );
 }

}
