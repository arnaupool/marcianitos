import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { from } from 'rxjs';
import { Marciano } from 'src/app/entities/marciano';
import { AsignarpasajerosComponent } from '../detalleaeronave/asignarpasajeros/asignarpasajeros.component';
import { BajarpasajerosComponent } from '../detalleaeronave/bajarpasajeros/bajarpasajeros.component';

import {MarcianoService} from '../../services/marciano.service';

@Component({
  selector: 'app-detalleaeronave',
  templateUrl: './detalleaeronave.component.html',
  styleUrls: ['./detalleaeronave.component.css']
})
export class DetalleaeronaveComponent implements OnInit {
  nombre : string;
  id : number;
  max : string;
  /*marcianitos = [
    { id: "MRC-1", nombre: "XC-P7"},
    { id: "MRC-2", nombre: "Woblo"},
    { id: "MRC-3", nombre: "Manolo"},
    { id: "MRC-4", nombre: "สวัสดี"}
  ];*/
  marcianitos: Marciano[] = [];
  current : number;
  //max : number = 10;
  component;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data, 
    private dialog: MatDialog,
    private marcianoServie: MarcianoService
    ) { 
      this.id = data.id; 
      this.nombre = data.nombre; 
      this.max = data.max;
    }

  ngOnInit(): void {
    this.listarMarcianitos();
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

  listarMarcianitos(){
    this.marcianoServie.listarMarciano(this.id).subscribe(
      (res) => {
        this.marcianitos = res as Marciano[];
        console.log(this.marcianitos);
        this.current = this.marcianitos.length;
      }
    );
  }


}
