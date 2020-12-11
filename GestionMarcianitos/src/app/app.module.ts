import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrearaeronaveComponent } from './aeronave/crearaeronave/crearaeronave.component';
import { ListaraeronaveComponent } from './aeronave/listaraeronave/listaraeronave.component';
import { CrearnavenodrizaComponent } from './navenodriza/crearnavenodriza/crearnavenodriza.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearaeronaveComponent,
    ListaraeronaveComponent,
    CrearnavenodrizaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
