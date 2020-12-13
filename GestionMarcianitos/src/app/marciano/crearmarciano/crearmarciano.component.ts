import { Component, OnInit } from '@angular/core';

// Services
import {MarcianoService} from '../../services/marciano.service';

@Component({
  selector: 'app-crearmarciano',
  templateUrl: './crearmarciano.component.html',
  styleUrls: ['./crearmarciano.component.css']
})
export class CrearmarcianoComponent implements OnInit {

  constructor(
    private marcianoService:MarcianoService
  ) { }

  ngOnInit(): void {
  }

}
