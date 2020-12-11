import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrearaeronaveComponent } from './aeronave/crearaeronave/crearaeronave.component';
import { ListaraeronaveComponent } from './aeronave/listaraeronave/listaraeronave.component';
import { CrearnavenodrizaComponent } from './navenodriza/crearnavenodriza/crearnavenodriza.component';
import { CrearmarcianoComponent } from './marciano/crearmarciano/crearmarciano.component';
import { SubirmarcianoComponent } from './marciano/subirmarciano/subirmarciano.component';
import { BajarmarcianoComponent } from './marciano/bajarmarciano/bajarmarciano.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearaeronaveComponent,
    ListaraeronaveComponent,
    CrearnavenodrizaComponent,
    CrearmarcianoComponent,
    SubirmarcianoComponent,
    BajarmarcianoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
