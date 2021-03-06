import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Services
import { MarcianoService } from '../../../services/marciano.service';

// Entities
import {Marciano} from '../../../entities/marciano';
import { VentanaerrorComponent } from 'src/app/ventanaerror/ventanaerror.component';

@Component({
  selector: 'app-bajarpasajeros',
  templateUrl: './bajarpasajeros.component.html',
  styleUrls: ['./bajarpasajeros.component.css']
})
export class BajarpasajerosComponent implements OnInit {
  nave_id;
  nave_nombre;
  bajarPasajeroForm : FormGroup;
  marcianos: Marciano[] = [];
  errorMessages: any;

  constructor(
    private dialog: MatDialog,
    private readonly formBuilder: FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public data, 
    private dialogRef: MatDialogRef<BajarpasajerosComponent>,
    private marcianoService:MarcianoService
    ) {
      this.nave_id = data.id;
      this.nave_nombre = data.nombre;
    }

  ngOnInit(): void {
    this.defineValidators();
    this.defineErrorMessages();
    this.listarMarcianosNave();
  }

  defineValidators() {
    this.bajarPasajeroForm = this.formBuilder.group({
      idPasajero: new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15)
      ])
      )
    });
  }

  defineErrorMessages(){
    this.errorMessages = {
      idPasajero: [
        { type: 'required', message: 'ID del pasajero es necesario.' },
        { type: 'maxlength', message: 'El ID del pasajero debe ser inferior a 15 caracteres .'
        }
      ]
    };
  }

  bajarPasajero() {
    //Bajar pasajero de nave
    this.marcianoService.modificarMarciano({
      id: this.bajarPasajeroForm.value.idPasajero,
      nombre: null, 
      idAeronave: null
    }).subscribe( (res : any) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.height = "200px";
      dialogConfig.width = "300px";
      switch (res.msg) {
        case "MODIFICADO":
          //mensaje confirmación
          dialogConfig.data = {motivo: "Confirmación", error: "Marciano bajado correctamente"}
          this.dialog.open(VentanaerrorComponent, dialogConfig);
          break;
      }
    });
  }

  listarMarcianosNave(){
    this.marcianoService.listarMarciano(this.nave_id).subscribe(
      (res) => {
        this.marcianos = res as Marciano[];
        console.log(this.marcianos);
      }
    );
  }

  cancelar() {
    this.dialogRef.close();
  }
}
