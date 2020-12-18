import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalleaeronave',
  templateUrl: './detalleaeronave.component.html',
  styleUrls: ['./detalleaeronave.component.css']
})
export class DetalleaeronaveComponent implements OnInit {
  nombre : string;
  id : string;
  marcianitos = [
    { id: "MRC-1", nombre: "XC-P7"},
    { id: "MRC-2", nombre: "Woblo"},
    { id: "MRC-3", nombre: "Manolo"},
    { id: "MRC-4", nombre: "สวัสดี"}
  ];
  current : number = this.marcianitos.length;
  max : number = 10;

  constructor(@Inject(MAT_DIALOG_DATA) public data) { this.id = data.id; this.nombre = data.nombre; }

  ngOnInit(): void {
  }

  openDialog(event) {

  }

}
