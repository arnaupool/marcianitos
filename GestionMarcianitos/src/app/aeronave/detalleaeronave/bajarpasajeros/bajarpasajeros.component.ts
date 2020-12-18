import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bajarpasajeros',
  templateUrl: './bajarpasajeros.component.html',
  styleUrls: ['./bajarpasajeros.component.css']
})
export class BajarpasajerosComponent implements OnInit {
  nave_id;
  nave_nombre;
  bajarPasajeroForm : FormGroup;
  errorMessages: any;

  constructor(private readonly formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<BajarpasajerosComponent>) {
    this.nave_id = data.id;
    this.nave_nombre = data.nombre;
  }

  ngOnInit(): void {
    this.defineValidators();
    this.defineErrorMessages();
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
  }

  cancelar() {
    this.dialogRef.close();
  }
}
