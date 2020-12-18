import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

// Services
import {AeronaveService} from '../../services/aeronave.service';

@Component({
  selector: 'app-crearaeronave',
  templateUrl: './crearaeronave.component.html',
  styleUrls: ['./crearaeronave.component.css']
})
export class CrearaeronaveComponent implements OnInit {
  crearAeronaveForm: FormGroup;
  errorMessages: any;

  constructor(
    private aeroNaveService: AeronaveService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.defineValidators();
    this.defineErrorMessages();
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

  crearAeronave(){}

}
