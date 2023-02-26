import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromosComponent } from './components/palindromos/palindromos.component';
import { PotenciaComponent } from './components/potencia/potencia.component';


@NgModule({
  declarations: [
    AppComponent,
    PalindromosComponent,
    PotenciaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
