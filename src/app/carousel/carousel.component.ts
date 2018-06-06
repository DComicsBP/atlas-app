import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  ifrsPOA = '../../assets/images/ifrs-google-maps.PNG';
  famed = '../../assets/images/famed.PNG';
  RS = '../../assets/images/rs.PNG';
  ifrsRestinga02 = '../../assets/images/ifrs-porto-alegre.PNG';
  vale = '../../assets/images/vale.PNG';

  ngOnInit() {
  }

}
