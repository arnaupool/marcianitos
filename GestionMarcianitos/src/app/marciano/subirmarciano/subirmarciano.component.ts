import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

// Services
import {MarcianoService} from '../../services/marciano.service';

@Component({
  selector: 'app-subirmarciano',
  templateUrl: './subirmarciano.component.html',
  styleUrls: ['./subirmarciano.component.css']
})
export class SubirmarcianoComponent implements OnInit {
  subirMarcianoForm: FormGroup;
  errorMessages: any;
  constructor(
    private marcianoService:MarcianoService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.defineValidators();
    this.defineErrorMessages();
  }
  defineValidators() {
    this.subirMarcianoForm = this.formBuilder.group({
      idMarciano: new FormControl('', 
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15)
      ])
      ),
      idAeronave:new FormControl('', 
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
      idMarciano: [
        { type: 'required', message: 'ID de Marciano es necesario.' },
        { type: 'maxlength', message: 'El ID de Marciano debe ser inferior a 15 caracteres .'
        }
      ],
      idAeronave: [
        { type: 'required', message: 'El ID de Aeronave nombre es necesario.' },
        { type: 'maxlength', message: 'El ID de Aeronave debe ser inferior a 50 caracteres .'
        }
      ]
    };
  }
  subirMarciano(){
    this.marcianoService.modificarMarciano({
      id: this.subirMarcianoForm.value.idMarciano,
      nombre: null, 
      idAeronave: this.subirMarcianoForm.value.idAeronave,
    }).subscribe( (res) => console.log(res) )
  }

  ngOnDestroy() {
    this.subirMarcianoForm.value.idMarciano = '';
    this.subirMarcianoForm.value.idAeronave = '';
  }
}
