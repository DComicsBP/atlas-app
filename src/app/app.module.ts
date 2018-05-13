import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { RegiaoComponent, IframeSafePipe } from './regiao/regiao.component';
import { EquipeComponent } from './equipe/equipe.component';
import { MaterialComponent } from './material/material.component';
import { MetodologiaComponent } from './metodologia/metodologia.component';
import { AppRoutingModule } from './app.routing.module';




@NgModule({
  declarations: [
    AppComponent,
    ProjetoComponent,
    RegiaoComponent,
    EquipeComponent,
    MaterialComponent,
    MetodologiaComponent,
    IframeSafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
