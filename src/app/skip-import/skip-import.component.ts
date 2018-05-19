import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skip-import',
  templateUrl: './skip-import.component.html',
  styleUrls: ['./skip-import.component.css']
})
export class SkipImportComponent implements OnInit {
  src = '../../assets/images/ifrs-google-maps.PNG';

  constructor() { }

  ngOnInit() {
  }

}
