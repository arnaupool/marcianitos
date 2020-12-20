import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { VentanaerrorComponent } from '../../ventanaerror/ventanaerror.component';

// Services
import { RevisionService } from '../../services/revision.service';
import { AeronaveService } from '../../services/aeronave.service';
import { Aeronave } from 'src/app/entities/aeronave';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-crearrevision',
  templateUrl: './crearrevision.component.html',
  styleUrls: ['./crearrevision.component.css']
})
export class CrearrevisionComponent implements OnInit {
  crearRevisionForm : FormGroup;
  errorMessages: any;
  aeronaves: Aeronave[] = [];

  constructor(
    private dialog: MatDialog,
    private readonly formBuilder: FormBuilder, 
    private dialogRef: MatDialogRef<CrearrevisionComponent>,
    private revisionService: RevisionService,
    private aeronaveService:AeronaveService
    ) {  }

  ngOnInit(): void {
    this.defineValidators();
    this.defineErrorMessages();
    this.listarAeronaves();
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
    //comprobar si la aeronave tiene una revision con esa fecha 
    
    //Crear revision
    this.revisionService.crearRevision({
      id: this.crearRevisionForm.value.idRevAeronave,
      nombreRevisor: this.crearRevisionForm.value.nombreRevisor,
      fecha: this.crearRevisionForm.value.fecha,
      idAeronave: this.crearRevisionForm.value.idAeronave,
      nombre: null
    }).subscribe( (res : any) => {

      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.height = "200px";
      dialogConfig.width = "300px";

      switch (res.msg) {
        case "CREADO":
          //mensaje confirmación
          dialogConfig.data = {motivo: "Confirmación", error: "Revisión creada correctamente"}
          this.dialog.open(VentanaerrorComponent, dialogConfig);
          break;
        case "ID_DUPLICADO":
          dialogConfig.data = {motivo: "Error", error: "ID ya en uso. Revisión no creada."}
          this.dialog.open(VentanaerrorComponent, dialogConfig);
          //mensaje error Id duplicada o ya existe
          break;
          case "FECHA_DUPLICADA":
            dialogConfig.data = {motivo: "Error", error: "Ya hay una revisiñon con la fecha seleccionada. Revisión no creada."}
          this.dialog.open(VentanaerrorComponent, dialogConfig);
            //mensaje error fecha duplicada o ya existe
            break;
      }
    });
  }

  listarAeronaves(){
    this.aeronaveService.listarAeroNaves().subscribe(
      (res) => {
        this.aeronaves = res as Aeronave[];
          console.log(this.aeronaves);
        }
      );
    }

  cancelar() {
    this.dialogRef.close();
  }

}

