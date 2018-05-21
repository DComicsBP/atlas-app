import { IframeSafePipe } from './regiao/iframe-safe.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { RegiaoComponent } from './regiao/regiao.component';
import { EquipeComponent } from './equipe/equipe.component';
import { MaterialComponent } from './material/material.component';
import { MetodologiaComponent } from './metodologia/metodologia.component';
import { AppRoutingModule } from './app.routing.module';
import { SkipImportComponent } from './skip-import/skip-import.component';
import { FooterAppComponent } from './footer-app/footer-app.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjetoComponent,
    RegiaoComponent,
    EquipeComponent,
    MaterialComponent,
    MetodologiaComponent,
    IframeSafePipe,
    SkipImportComponent,
    FooterAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
