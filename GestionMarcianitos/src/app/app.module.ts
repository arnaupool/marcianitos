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
import { CrearrevisionComponent } from './revision/crearrevision/crearrevision.component';
import { ListarnodrizaComponent } from './navenodriza/listarnodriza/listarnodriza.component';
import { ListarhistorialComponent } from './revision/listarhistorial/listarhistorial.component';
import { DetalleaeronaveComponent } from './aeronave/detalleaeronave/detalleaeronave.component';
import { AsignarpasajerosComponent } from './aeronave/detalleaeronave/asignarpasajeros/asignarpasajeros.component';
import { BajarpasajerosComponent } from './aeronave/detalleaeronave/bajarpasajeros/bajarpasajeros.component';
import { ListarmarcianosComponent } from './revision/listarhistorial/listarmarcianos/listarmarcianos.component';
import { VentanaerrorComponent } from './ventanaerror/ventanaerror.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearaeronaveComponent,
    ListaraeronaveComponent,
    CrearnavenodrizaComponent,
    CrearmarcianoComponent,
    CrearrevisionComponent,
    ListarnodrizaComponent,
    ListarhistorialComponent,
    DetalleaeronaveComponent,
    AsignarpasajerosComponent,
    BajarpasajerosComponent,
    ListarmarcianosComponent,
    VentanaerrorComponent
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
