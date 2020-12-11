import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrearAeronaveComponent } from './aeronave/crear-aeronave/crear-aeronave.component';
import { CrearaeronaveComponent } from './aeronave/crearaeronave/crearaeronave.component';
import { ListaraeronaveComponent } from './aeronave/listaraeronave/listaraeronave.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearAeronaveComponent,
    CrearaeronaveComponent,
    ListaraeronaveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
