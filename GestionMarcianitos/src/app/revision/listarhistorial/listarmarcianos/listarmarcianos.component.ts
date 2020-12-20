import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Historialmarciano } from '../../../entities/historialmarciano';


@Component({
  selector: 'app-listarmarcianos',
  templateUrl: './listarmarcianos.component.html',
  styleUrls: ['./listarmarcianos.component.css']
})
export class ListarmarcianosComponent implements OnInit {
  aero_nombre : string;
  aero_id : string;
  rev_id : string;
  marcianitos : Historialmarciano[] = [];
  /* marcianitos = [
    { id: "MRC-1", nombre: "XC-P7"},
    { id: "MRC-2", nombre: "Woblo"},
    { id: "MRC-3", nombre: "Manolo"},
    { id: "MRC-4", nombre: "สวัสดี"}
  ]; */

  constructor(
    @Inject(MAT_DIALOG_DATA) public data) { this.rev_id = data.rev_id; this.aero_nombre = data.aero_nombre; this.aero_id = data.aero_id, this.marcianitos = data.marcianos}

  ngOnInit(): void {

  }
}
