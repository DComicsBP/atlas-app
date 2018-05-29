import { RegiaoService } from './regiao/regiao.service';
import { Component, OnInit } from '@angular/core';
export let contraste;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'app';
  src = '../assets/images/ifrs-google-maps.PNG';
  estilo = '';

  constructor(private _RegiaoService: RegiaoService) {
 //   _RegiaoService.getStatusService(contraste);

  }
  onclickEvent(contrast) {
    if (this.estilo === 'contrast') { this.estilo = ''; } else if (this.estilo === '') { this.estilo = contrast; }
    // tslint:disable-next-line:label-position
    // tslint:disable-next-line:no-unused-expression
    contrast = this.estilo;
   // this._RegiaoService.getStatusService(contrast);
  }

}
