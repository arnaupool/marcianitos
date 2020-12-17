import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CrearaeronaveComponent } from './aeronave/crearaeronave/crearaeronave.component';
import { ListaraeronaveComponent } from './aeronave/listaraeronave/listaraeronave.component';
import { CrearnavenodrizaComponent } from './navenodriza/crearnavenodriza/crearnavenodriza.component';
import { CrearmarcianoComponent } from './marciano/crearmarciano/crearmarciano.component';
import { SubirmarcianoComponent } from './marciano/subirmarciano/subirmarciano.component';
import { BajarmarcianoComponent } from './marciano/bajarmarciano/bajarmarciano.component';
import { CrearrevisionComponent } from './revision/crearrevision/crearrevision.component';
import { ListarnodrizaComponent } from './navenodriza/listarnodriza/listarnodriza.component';
import { ListarrevisionComponent } from './revision/listarrevision/listarrevision.component';
import { ListarhistorialComponent } from './revision/listarhistorial/listarhistorial.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearaeronaveComponent,
    ListaraeronaveComponent,
    CrearnavenodrizaComponent,
    CrearmarcianoComponent,
    SubirmarcianoComponent,
    BajarmarcianoComponent,
    CrearrevisionComponent,
    ListarnodrizaComponent,
    ListarrevisionComponent,
    ListarhistorialComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
