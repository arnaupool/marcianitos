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
    private dialog: MatDialog,
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
      (res : any) => {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.height = "200px";
        dialogConfig.width = "300px";

        switch (res.msg) {
          case "CREADO":
            //mensaje confirmación
            dialogConfig.data = {motivo: "Confirmación", error: "Nave nodriza creada correctamente"}
            this.dialog.open(VentanaerrorComponent, dialogConfig);
            break;
          case "ID_DUPLICADO":
            //mensaje error Id duplicada o ya existe
            dialogConfig.data = {motivo: "Error", error: "ID ya en uso. Nave nodriza no creada."}
            this.dialog.open(VentanaerrorComponent, dialogConfig);
            break;
    }
  }
    );
  }

  cancelar() {
    this.dialogRef.close();
  }

}
