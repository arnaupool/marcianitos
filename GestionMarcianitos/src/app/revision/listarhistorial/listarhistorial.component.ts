import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { ListarmarcianosComponent } from './listarmarcianos/listarmarcianos.component';
import { from } from 'rxjs';

//Entities
import { Revision } from '../../entities/revision';
import { Historialmarciano } from '../../entities/historialmarciano';

//Service
import { RevisionService } from '../../services/revision.service';
import { HistorialmarcianoService } from '../../services/historialmarciano.service';


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
  marcianos :  Historialmarciano[] = [];
  marcianoHisto : Historialmarciano[] = [];

  constructor(
    private dialog: MatDialog,
    private revisionService: RevisionService,
    private historialMarcianoService: HistorialmarcianoService
    ) { }

  ngOnInit(): void {
    this.listarRevisiones();
  }

  openDialog(hist) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      rev_id: hist.id,
      aero_id: hist.idAeronave,
      aero_nombre: hist.nombre,
      marcianos: this.marcianoHisto  
    }

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "400px";
    dialogConfig.width = "600px";

    this.dialog.open(ListarmarcianosComponent, dialogConfig);
  }

  listarRevisiones(){
    this.revisionService.listarRevision().subscribe(
      (res) => {
        this.revisiones = res as Revision[];
        console.log(this.revisiones);
        for(let rev of this.revisiones){        
          this.historialMarcianoService.listarHistorialDeRevision(rev.id).subscribe(
            (res) => {
              this.marcianos = res as Historialmarciano[];
              console.log("HISTORIALES MARCIANOS:");
              console.log(this.marcianos);
              for(let res of this.marcianos){
                this.marcianoHisto.push(res);
                
              }
            }
          );
        }
        //console.log(this.marcianoHisto);
      }
    );
  }

}