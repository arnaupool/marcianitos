import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { CrearaeronaveComponent } from './aeronave/crearaeronave/crearaeronave.component';
import { CrearnavenodrizaComponent } from './navenodriza/crearnavenodriza/crearnavenodriza.component';
import { ListarnodrizaComponent } from './navenodriza/listarnodriza/listarnodriza.component';
import { ListarrevisionComponent } from './revision/listarrevision/listarrevision.component';
import { ListarhistorialComponent } from './revision/listarhistorial/listarhistorial.component';

// Services
import {MarcianoService} from './services/marciano.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SIGEM - Sistema de Gestión de Marcianitos';
  component;

  constructor (private dialog: MatDialog) {}

  openDialog(event) {
    switch (event.target.attributes.id.nodeValue) {
      case "c_aeronave":
        this.component = CrearaeronaveComponent;
        break;
      case "c_nodriza":
        this.component = CrearnavenodrizaComponent;
        break;
      case "l_nodriza":
        this.component = ListarnodrizaComponent;
        break;
      case "l_rev":
        this.component = ListarrevisionComponent;
        break;
      case "l_hist":
        this.component = ListarhistorialComponent;
        break;
    
      default:
        console.log("none");
        break;    
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "600px";
    dialogConfig.width = "1000px";

    this.dialog.open(this.component, dialogConfig);
  }
}
