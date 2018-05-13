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
  { path: 'material', component: MaterialComponent },
  { path: 'material/:id', component: MaterialComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'metodologia', component: MetodologiaComponent },
  { path: 'regiao', component: RegiaoComponent },
  { path: 'regiao/:id', component: RegiaoComponent },
  { path: '**', redirectTo: '/projeto' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(appRoutes)],
})


export class AppRoutingModule {}
