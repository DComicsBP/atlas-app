import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegiaoService } from './regiao.service';

@Component({
  selector: 'app-regioes',
  templateUrl: './regiao.component.html',
  styleUrls: ['./regiao.component.css'],
  providers: [RegiaoService]
})
export class RegiaoComponent implements OnInit {
  showConteudo = true;
  regiao = null; mapUrl = null; titulo = null; Ltitulo = null; leg = null;

  constructor(private _RegioesService: RegiaoService,
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log(this._activatedRoute);
    this._activatedRoute.params.subscribe(data => {
      console.log('Router value => ', data);
      const routerId = Number(data.id);
      this._get(routerId);
    });

  }

  // tslint:disable-next-line:member-ordering
  legenda = null;
  // tslint:disable-next-line:member-ordering
  legendasP = [];

  showMap(link, titulo, ltitulo, leg) {
    this.legendasP = [];
    this.showConteudo = false;
    this.titulo = titulo;
    this.mapUrl = link;
    this.Ltitulo = ltitulo;
    this.leg = leg;

  for (let i = 0; i < leg.length; i++) {
    this.legendasP.push({leg: this.leg[i], tit: this.Ltitulo[i]});
  }

  console.log(this.legendasP);
  }

  private _get(routerId) {
    this.regiao = this._RegioesService.getRegiao(routerId);
    if (this.regiao) { this.showConteudo = true; }

  }
}
