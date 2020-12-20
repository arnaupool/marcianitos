import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

// Services
import {NavenodrizaService} from '../../services/navenodriza.service';

@Component({
  selector: 'app-crearnavenodriza',
  templateUrl: './crearnavenodriza.component.html',
  styleUrls: ['./crearnavenodriza.component.css']
})
export class CrearnavenodrizaComponent implements OnInit {
  crearAeronaveForm: FormGroup;
  errorMessages: any;
  constructor(
    private navenodrizaService: NavenodrizaService,
    private readonly formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CrearnavenodrizaComponent>
  ) { }

  ngOnInit(): void {
    this.defineErrorMessages();
    this.defineValidators();
  }

  defineValidators() {
    this.crearAeronaveForm = this.formBuilder.group({
      idNavenodriza: new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15)
      ])
      ),
      nombreNavenodriza : new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)
      ])
      )
    });
  }

  defineErrorMessages(){
    this.errorMessages = {
      idNavenodriza: [
        { type: 'required', message: 'ID de la nave nodriza es necesario.' },
        { type: 'maxlength', message: 'El ID de la nave nodriza debe ser inferior a 15 caracteres .'
        }
      ],
      nombreNavenodriza: [
        { type: 'required', message: 'El nombre de la nave nodriza es necesario.' },
        { type: 'maxlength', message: 'El nombre debe ser inferior a 20 caracteres .'
        }
      ]
    };
  }

  crearNavenodriza(){
    this.navenodrizaService.crearNave({
      id: this.crearAeronaveForm.value.idNavenodriza,
      nombre: this.crearAeronaveForm.value.nombreNavenodriza,
    }).subscribe( 
      (res) => { 
        switch (res) {
          case "CREADO":
            //mensaje confirmación
            break;
          case "ID_DUPLICADO":
            //mensaje error Id duplicada o ya existe
            break;
    }
  }
    );
  }

  cancelar() {
    this.dialogRef.close();
  }

}
