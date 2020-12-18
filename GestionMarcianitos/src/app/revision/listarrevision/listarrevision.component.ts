import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-listarrevision',
  templateUrl: './listarrevision.component.html',
  styleUrls: ['./listarrevision.component.css']
})
export class ListarrevisionComponent implements OnInit {
  crearRevisionForm : FormGroup;
  errorMessages: any;
  constructor(private readonly formBuilder: FormBuilder, private dialogRef: MatDialogRef<ListarrevisionComponent>) {  }

  ngOnInit(): void {
    this.defineValidators();
    this.defineErrorMessages();
  }

  defineValidators() {
    this.crearRevisionForm = this.formBuilder.group({
      idRevAeronave: new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15)
      ])
      ),
      nombreRevisor : new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)
      ])
      ),
      idAeronave: new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15)
      ])
      ),
      fecha: new FormControl('',
      Validators.compose([
        Validators.required
      ])
      ),
    });
  }

  defineErrorMessages(){
    this.errorMessages = {
      idRevAeronave: [
        { type: 'required', message: 'ID de la revisión es necesario.' },
        { type: 'maxlength', message: 'El ID de Aeronave debe ser inferior a 15 caracteres .'
        }
      ],
      nombreRevisor: [
        { type: 'required', message: 'El nombre del revisor es necesario.' },
        { type: 'maxlength', message: 'El nombre debe ser inferior a 20 caracteres .'
        }
      ],
      idAeronave: [
        { type: 'required', message: 'ID de Aeronave es necesario.' },
        { type: 'maxlength', message: 'El número máximo debe ser inferior a 15 caracteres .'
        }
      ],
      fecha: [
        { type: 'required', message: 'La fecha de revisión es necesaria.' }
      ],
    };
  }

  crearRevision() {

  }

  cancelar() {
    this.dialogRef.close();
  }

}
