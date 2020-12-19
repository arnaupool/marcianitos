import { Component, OnInit } from '@angular/core';
import { DetalleaeronaveComponent } from '../detalleaeronave/detalleaeronave.component';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from "@angular/material/dialog";

// Services
import {AeronaveService} from '../../services/aeronave.service';

// Entities
import { Aeronave } from '../../entities/aeronave';

@Component({
  selector: 'app-listaraeronave',
  templateUrl: './listaraeronave.component.html',
  styleUrls: ['./listaraeronave.component.css']
})
export class ListaraeronaveComponent implements OnInit {
  /*aeronaves = [
    { id: "AIR-1", nombre: "La Pinta"},
    { id: "AIR-2", nombre: "La Niña"},
    { id: "AIR-3", nombre: "La Santa María"},
    { id: "AIR-4", nombre: "Turbotron"}
  ];*/
  aeronaves: Aeronave[] = []; 

  constructor(
    private dialog: MatDialog,
    private aeronaveService: AeronaveService
    ) { }

  ngOnInit(): void {
    this.listarAeronaves();
  }

  openDialog(aero) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: aero.id,
      nombre: aero.nombre,
      max: aero.max
    }

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "600px";
    dialogConfig.width = "1000px";

    this.dialog.open(DetalleaeronaveComponent, dialogConfig);
  }

  listarAeronaves(){
    this.aeronaveService.listarAeroNaves().subscribe(
      (res) => {
        this.aeronaves = res as Aeronave[];
        console.log(this.aeronaves);
      }
    );
  }

}
