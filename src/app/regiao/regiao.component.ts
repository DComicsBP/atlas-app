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

  showMap(link, titulo, ltitulo, leg) {
    this.showConteudo = false;
    this.titulo = titulo;
    this.mapUrl = link;
    this.Ltitulo = ltitulo;
    this.leg = leg;
  }

  private _get(routerId) {
    this.regiao = this._RegioesService.getRegiao(routerId);
    if (this.regiao) { this.showConteudo = true; }

  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class IframeSafePipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }

  transform(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
