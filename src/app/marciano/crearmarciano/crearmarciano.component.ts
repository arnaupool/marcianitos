import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { VentanaerrorComponent } from 'src/app/ventanaerror/ventanaerror.component';


// Services
import {MarcianoService} from '../../services/marciano.service';

@Component({
  selector: 'app-crearmarciano',
  templateUrl: './crearmarciano.component.html',
  styleUrls: ['./crearmarciano.component.css']
})
export class CrearmarcianoComponent implements OnInit {
  crearMarcianoForm: FormGroup;
  errorMessages: any;

  constructor(
    private dialogRef: MatDialogRef<CrearmarcianoComponent>,
    private dialog: MatDialog,
    private marcianoService: MarcianoService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.defineValidators();
    this.defineErrorMessages();
  }


  defineValidators() {
    this.crearMarcianoForm = this.formBuilder.group({
      idMarciano: new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15)
      ])
      ),
      nombreMarciano:new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30)
      ])
      )
    });
  }

  defineErrorMessages(){
    this.errorMessages = {
      idMarciano: [
        { type: 'required', message: 'ID es necesario.' },
        { type: 'maxlength', message: 'El ID debe ser inferior a 15 caracteres .'
        }
      ],
      nombreMarciano: [
        { type: 'required', message: 'El nombre es necesario.' },
        { type: 'maxlength', message: 'El nombre debe ser inferior a 50 caracteres .'
        }
      ]
    };
  }

crearMarciano(){
  this.marcianoService.crearMarciano({
    id: this.crearMarcianoForm.value.idMarciano,
    nombre: this.crearMarcianoForm.value.nombreMarciano,
    idAeronave: null
  }).subscribe( (res : any) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "200px";
    dialogConfig.width = "300px";

    switch (res.msg) {
      case "CREADO":
        //mensaje confirmación
        dialogConfig.data = {motivo: "Confirmación", error: "Marciano creado correctamente"}
        this.dialog.open(VentanaerrorComponent, dialogConfig);
        break;
      case "ID_DUPLICADO":
        //mensaje error Id duplicada o ya existe
        dialogConfig.data = {motivo: "Error", error: "ID ya en uso. Marciano no creado."}
        this.dialog.open(VentanaerrorComponent, dialogConfig);
        break;
    }
  });
}

ngOnDestroy() {
  this.crearMarcianoForm.value.idMarciano = '';
  this.crearMarcianoForm.value.nombreMarciano = '';
}

cancelar() {
  this.dialogRef.close();
}

}
