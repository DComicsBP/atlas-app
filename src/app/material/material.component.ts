import { ActivatedRoute } from '@angular/router';
import { MaterialService } from './material.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
  providers: [MaterialService]
})
export class MaterialComponent implements OnInit {
cursos: any[];
  constructor(private _materialService: MaterialService,
              private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this._ActivatedRoute);
    this._ActivatedRoute.params.subscribe(data => {
      console.log('Router value => ', data);
      const routerId = Number(data.id);
      this._get(routerId);
      // tslint:disable-next-line:no-debugger
  });
}
// tslint:disable-next-line:member-ordering
curso: any;
  private _get(routerId) {
    this.curso = this._materialService.getCurso(routerId);
    }


    public scrollToBottom(id) {
      const div = document.getElementById(id);
      div.scrollTop = div.scrollHeight - div.clientHeight;
   }

}
