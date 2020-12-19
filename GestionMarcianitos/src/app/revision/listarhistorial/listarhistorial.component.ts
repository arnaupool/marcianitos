import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { ListarmarcianosComponent } from './listarmarcianos/listarmarcianos.component';

//Entities
import {Revision} from '../../entities/revision';

//Service
import {RevisionService} from '../../services/revision.service';

@Component({
  selector: 'app-listarhistorial',
  templateUrl: './listarhistorial.component.html',
  styleUrls: ['./listarhistorial.component.css']
})
export class ListarhistorialComponent implements OnInit {
  /*revisiones = [
    { id: "REV-1", aero_id: "AIR-1", aero_nombre: "La Pinta", fecha: "02/12/2020"},
    { id: "REV-2", aero_id: "AIR-2", aero_nombre: "La Niña", fecha: "05/12/2020"},
    { id: "REV-3", aero_id: "AIR-3", aero_nombre: "La Santa María", fecha: "15/11/2020"},
    { id: "REV-4", aero_id: "AIR-4", aero_nombre: "Turbotron", fecha: "13/08/1975"}
  ];*/
  revisiones : Revision[] = [];

  constructor(
    private dialog: MatDialog,
    private revisionService: RevisionService
    ) { }

  ngOnInit(): void {
    this.listarRevisiones();
  }

  openDialog(hist) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      rev_id: hist.id,
      aero_id: hist.aero_id,
      aero_nombre: hist.nombre      
    }

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "600px";
    dialogConfig.width = "1000px";

    this.dialog.open(ListarmarcianosComponent, dialogConfig);
  }

  listarRevisiones(){
    this.revisionService.listarRevision().subscribe(
      (res) => {
        this.revisiones = res as Revision[];
        console.log(this.revisiones);
      }
    );
  }

}