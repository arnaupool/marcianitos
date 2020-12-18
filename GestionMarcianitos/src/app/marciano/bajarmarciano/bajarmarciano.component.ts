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
  selector: 'app-bajarmarciano',
  templateUrl: './bajarmarciano.component.html',
  styleUrls: ['./bajarmarciano.component.css']
})
export class BajarmarcianoComponent implements OnInit {
  bajarMarcianoForm: FormGroup;
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
    this.bajarMarcianoForm = this.formBuilder.group({
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

  bajarMarciano(){
    this.marcianoService.modificarMarciano({
      id: this.bajarMarcianoForm.value.idMarciano,
      nombre: null, 
      idAeronave: this.bajarMarcianoForm.value.idAeronave,
    }).subscribe( (res) => console.log(res));
  }

  ngOnDestroy() {
    this.bajarMarcianoForm.value.idMarciano = '';
    this.bajarMarcianoForm.value.idAeronave = '';
  }


}
