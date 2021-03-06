import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

// Services
import {AeronaveService} from '../../services/aeronave.service';
import {NavenodrizaService} from '../../services/navenodriza.service';


// Entities
import { Navenodriza } from '../../entities/navenodriza';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { VentanaerrorComponent } from 'src/app/ventanaerror/ventanaerror.component';

@Component({
  selector: 'app-crearaeronave',
  templateUrl: './crearaeronave.component.html',
  styleUrls: ['./crearaeronave.component.css']
})
export class CrearaeronaveComponent implements OnInit {
  crearAeronaveForm: FormGroup;
  errorMessages: any;
  naveNodriza: Navenodriza[] = [];

  constructor(
    private dialog: MatDialog,
    private aeroNaveService: AeronaveService,
    private navenodrizaService: NavenodrizaService,
    private readonly formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CrearaeronaveComponent>
  ) { }

  ngOnInit(): void {
    this.defineValidators();
    this.defineErrorMessages();
    this.listarNavesNodrizas();
  }

  defineValidators() {
    this.crearAeronaveForm = this.formBuilder.group({
      idAeronave: new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15)
      ])
      ),
      nombreAeronave : new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)
      ])
      ),
      maxMarcianos: new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15)
      ])
      ),
      idOrigen: new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15)
      ])
      ),
      idDestino: new FormControl('',
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
      idAeronave: [
        { type: 'required', message: 'ID de Aeronave es necesario.' },
        { type: 'maxlength', message: 'El ID de Aeronave debe ser inferior a 15 caracteres .'
        }
      ],
      nombreAeronave: [
        { type: 'required', message: 'El nombre es necesario.' },
        { type: 'maxlength', message: 'El nombre debe ser inferior a 20 caracteres .'
        }
      ],
      maxMarcianos: [
        { type: 'required', message: 'Número máximo es necesario.' },
        { type: 'maxlength', message: 'El número máximo debe ser inferior a 15 caracteres .'
        }
      ],
      idOrigen: [
        { type: 'required', message: 'ID de Aeronave de Origen es necesario.' },
        { type: 'maxlength', message: 'El ID de Aeronave de Origen debe ser inferior a 15 caracteres .'
        }
      ],
      idDestino: [
        { type: 'required', message: 'ID de Aeronave de Destino es necesario.' },
        { type: 'maxlength', message: 'El ID de Aeronave de Destino debe ser inferior a 50 caracteres .'
        }
      ]
    };
  }

  crearAeronave(){
    this.aeroNaveService.crearAeroNave({
      id: this.crearAeronaveForm.value.idAeronave,
      nombre: this.crearAeronaveForm.value.nombreAeronave,
      max: this.crearAeronaveForm.value.maxMarcianos,
      origen: this.crearAeronaveForm.value.idOrigen,
      destino: this.crearAeronaveForm.value.idDestino
    }).subscribe( (res : any) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.height = "200px";
      dialogConfig.width = "300px";

      switch (res.msg) {
        case "CREADO":
          //mensaje confirmación
          dialogConfig.data = {motivo: "Confirmación", error: "Aeronave creada correctamente"}
          this.dialog.open(VentanaerrorComponent, dialogConfig);
          break;
        case "ID_DUPLICADO":
          //mensaje error Id duplicada o ya existe
          dialogConfig.data = {motivo: "Error", error: "ID ya en uso. Aeronave no creada."}
          this.dialog.open(VentanaerrorComponent, dialogConfig);
          break;
      }
    });
  }

 listarNavesNodrizas(){
     this.navenodrizaService.listarNaves().subscribe(
      (res) => {
        this.naveNodriza = res as Navenodriza[];
        console.log(this.naveNodriza);
      }
    );
  }

  cancelar() {
    this.dialogRef.close();
  }
}
