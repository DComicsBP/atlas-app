import { MapSiteComponent } from './map-site/map-site.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { ProjetoComponent } from './projeto/projeto.component';
import { MaterialComponent } from './material/material.component';
import { EquipeComponent } from './equipe/equipe.component';
import { MetodologiaComponent } from './metodologia/metodologia.component';
import { RegiaoComponent } from './regiao/regiao.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/projeto', pathMatch: 'full' },
  { path: 'projeto', component: ProjetoComponent },
  { path: 'mapa/projeto', component: ProjetoComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'mapa/material', component: MaterialComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'mapa/equipe', component: EquipeComponent },
  { path: 'metodologia', component: MetodologiaComponent },
  { path: 'mapa/metodologia', component: MetodologiaComponent },
  { path: 'mapa', component: MapSiteComponent },
  { path: 'mapa/regiao', component: RegiaoComponent },
  { path: 'regiao', component: RegiaoComponent },
  { path: 'mapa/regiao/:id', component: RegiaoComponent },
  { path: 'regiao/:id', component: RegiaoComponent },
  { path: 'mapa/material/:id', component: MaterialComponent },
  { path: 'material/:id', component: MaterialComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(appRoutes)],
})


export class AppRoutingModule {}
