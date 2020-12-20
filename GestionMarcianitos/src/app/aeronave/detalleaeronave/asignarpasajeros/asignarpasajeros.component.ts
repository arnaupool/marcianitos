import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrearmarcianoComponent } from '../../../marciano/crearmarciano/crearmarciano.component';

// Services
import { MarcianoService } from '../../../services/marciano.service';

// Entities
import {Marciano} from '../../../entities/marciano';

@Component({
  selector: 'app-asignarpasajeros',
  templateUrl: './asignarpasajeros.component.html',
  styleUrls: ['./asignarpasajeros.component.css']
})
export class AsignarpasajerosComponent implements OnInit {
  nave_id;
  nave_nombre;
  asignarPasajeroForm : FormGroup;
  errorMessages: any;
  dialogConfig;

  constructor(
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AsignarpasajerosComponent>,
    private marcianoService: MarcianoService,
    ) { 
      this.nave_id = data.id; 
      this.nave_nombre = data.nombre; 
    }

  ngOnInit(): void {
    this.defineValidators();
    this.defineErrorMessages();
  }
  
  defineValidators() {
    this.asignarPasajeroForm = this.formBuilder.group({
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

  asignarPasajero() {
    //Consultar ID
    this.marcianoService.getMarciano(
      this.asignarPasajeroForm.value.idPasajero).subscribe(
      (res) =>{
        console.log(res);
        if(res.length == 0){
          //Abrir ventana para crear marciano
          this.dialogConfig = new MatDialogConfig();
          this.dialogConfig.disableClose = false;
          this.dialogConfig.autoFocus = true;
          this.dialogConfig.height = "600px";
          this.dialogConfig.width = "800px";
          this.dialog.open(CrearmarcianoComponent, this.dialogConfig);

        } else{
          //Asignar pasajero a nave
          this.marcianoService.modificarMarciano({
            id: this.asignarPasajeroForm.value.idPasajero,
            nombre: null, 
            idAeronave: this.nave_id
          }).subscribe( (res) => { 
            switch (res.msg) {
              case "MODIFICADO":
                //mensaje confirmación
                break;
            }
          });
        }
      }
    );
  }

  cancelar() {
    this.dialogRef.close();
  }

}
