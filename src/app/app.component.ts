import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app';
  src = '../assets/images/ifrs-google-maps.PNG';
  estilo = '';

  onclickEvent(contrast) {
    if (this.estilo === 'contrast') { this.estilo = ''; } else if (this.estilo === '') { this.estilo = contrast; }
  }

}
