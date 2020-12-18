import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { AsignarpasajerosComponent } from '../detalleaeronave/asignarpasajeros/asignarpasajeros.component';
import { BajarpasajerosComponent } from '../detalleaeronave/bajarpasajeros/bajarpasajeros.component';

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
  component;

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialog: MatDialog) { this.id = data.id; this.nombre = data.nombre; }

  ngOnInit(): void {
  }

  openDialog(event) {
    let target = event.currentTarget.attributes.id.nodeValue;
    let target_1 = event.target.parentElement.id;
    target = target || target_1;
    console.log(target);
    switch (target) {
      case "a_pas":
        this.component = AsignarpasajerosComponent;
        break;
      case "b_pas":
        this.component = BajarpasajerosComponent;
        break;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "500px";
    dialogConfig.data = {
      id: this.id,
      name: this.nombre
    }

    this.dialog.open(this.component, dialogConfig);
  }

}
