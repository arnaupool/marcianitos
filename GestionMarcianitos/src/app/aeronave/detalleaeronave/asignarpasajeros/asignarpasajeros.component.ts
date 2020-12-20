import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data, 
    private dialogRef: MatDialogRef<AsignarpasajerosComponent>,
    private marcianoService:MarcianoService
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

    //Abrir ventana para crear marciano

    //Asignar pasajero a nave
    this.marcianoService.modificarMarciano({
      id: this.asignarPasajeroForm.value.idPasajero,
      nombre: null, 
      idAeronave: this.nave_id,
    }).subscribe( (res) => console.log(res));

  }

  cancelar() {
    this.dialogRef.close();
  }

}
