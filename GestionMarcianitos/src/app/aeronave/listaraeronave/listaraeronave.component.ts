import { Component, OnInit } from '@angular/core';
import { DetalleaeronaveComponent } from '../detalleaeronave/detalleaeronave.component';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-listaraeronave',
  templateUrl: './listaraeronave.component.html',
  styleUrls: ['./listaraeronave.component.css']
})
export class ListaraeronaveComponent implements OnInit {
  aeronaves = [
    { id: "AIR-1", nombre: "La Pinta"},
    { id: "AIR-2", nombre: "La Niña"},
    { id: "AIR-3", nombre: "La Santa María"},
    { id: "AIR-4", nombre: "Turbotron"}
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(aero) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: aero.id,
      nombre: aero.nombre
    }

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "600px";
    dialogConfig.width = "1000px";

    this.dialog.open(DetalleaeronaveComponent, dialogConfig);
  }

}
