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
  ifrsRestinga01 = '../assets/images/ifrs-google-maps.PNG';
  ifrsRestinga02 = '../assets/images/IFRSRESTINGA.PNG';
  famed = '../assets/images/famed.PNG';
  vale = '../assets/images/vale.PNG';
  ifrsPOA = '../assets/images/ifrs-porto-alegre.PNG';
  RS = '../assets/images/rs.PNG';
  estilo = '';

  constructor(private _RegiaoService: RegiaoService) {
 //   _RegiaoService.getStatusService(contraste);

  }
  onclickEvent(contrast) {
    if (this.estilo === 'contrast') { this.estilo = ''; } else if (this.estilo === '') { this.estilo = contrast; }
    contrast = this.estilo;
  }

}
