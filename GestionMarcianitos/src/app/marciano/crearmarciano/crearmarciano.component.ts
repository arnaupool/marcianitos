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
  selector: 'app-crearmarciano',
  templateUrl: './crearmarciano.component.html',
  styleUrls: ['./crearmarciano.component.css']
})
export class CrearmarcianoComponent implements OnInit {
  crearMarcianoForm: FormGroup;
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
        { type: 'maxlenght', message: 'El ID debe ser inferior a 15 caracteres .'
        }
      ],
      nombreMarciano: [
        { type: 'required', message: 'El nombre es necesario.' },
        { type: 'maxlenght', message: 'El nombre debe ser inferior a 50 caracteres .'
        }
      ]
    };
  }

crearMarciano(){
  /*this.marcianoService.

  ({
    idMarciano: this.crearMarcianoForm.value.idMarciano,
    nombreMarciano: this.crearMarcianoForm.value.nombreMarciano:
  })*/
}

ngOnDestroy() {
  this.crearMarcianoForm.value.idMarciano = '';
  this.crearMarcianoForm.value.nombreMarciano = '';
}

}
