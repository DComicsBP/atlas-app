import { FooterAppComponent } from './footer-app/footer-app.component';
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

import { RegiaoService } from './regiao/regiao.service';
import { IframeSafePipe02 } from './iframe-safe.pipe02';
import { ApoioComponent } from './apoio/apoio.component';
import { MapSiteComponent } from './map-site/map-site.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetoComponent,
    RegiaoComponent,
    EquipeComponent,
    MaterialComponent,
    MetodologiaComponent,
    IframeSafePipe,
    IframeSafePipe02,
    SkipImportComponent,
    FooterAppComponent,
    ApoioComponent,
    MapSiteComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RegiaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

