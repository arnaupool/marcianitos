import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

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
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
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

}
