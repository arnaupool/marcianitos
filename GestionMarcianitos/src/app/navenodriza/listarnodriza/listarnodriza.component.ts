import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarnodriza',
  templateUrl: './listarnodriza.component.html',
  styleUrls: ['./listarnodriza.component.css']
})
export class ListarnodrizaComponent implements OnInit {
  nodrizas = [
    { id: "NN-1", nombre: "Optimus"},
    { id: "NN-2", nombre: "Perseus"},
    { id: "NN-3", nombre: "Titanic"},
    { id: "NN-4", nombre: "Exobot"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
