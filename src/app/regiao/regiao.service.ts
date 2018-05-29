import { RegiaoComponent } from './regiao.component';
// tslint:disable:eofline
// tslint:disable:max-line-length
import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { mapasAdministrativos, mapasDemografia, descricao as descricaoM, mapasMortalidade, mapasSaudeAmbiental, mapasViolencia } from './mapas';

@Injectable()
export class RegiaoService implements OnChanges {
  contraste: any;
  tipoMapa: any[] = [ mapasMortalidade, mapasDemografia, mapasAdministrativos, mapasSaudeAmbiental, mapasViolencia];
  descricao: any[] = descricaoM;
  flagStatus = false;


  private _regioes = [
    { id: 1,
      regiao: 'Demografia',
      desc: this.descricao[0],
      maps: this.tipoMapa[1],
    },
    { id: 2,
      regiao: 'Administrativos',
      desc: this.descricao[1],
      maps: this.tipoMapa[2],

    },
    { id: 3,
      regiao: 'Violência',
      desc: this.descricao[2],
      maps: this.tipoMapa[4],
     },
    { id: 4,
      regiao: 'Mortalidade',
      desc: this.descricao[3],
      maps: this.tipoMapa[0],
    },

    { id: 5,
      regiao: 'Saúde Ambiental',
      desc: this.descricao[4],
      maps: this.tipoMapa[3],
    }
  ];

  public _RegiaoComponent: RegiaoComponent;
  ngOnChanges(changes: SimpleChanges): void {
   // this._RegiaoComponent.flagui = this.getStatusService(contraste);
  //  console.log('on Change', this.getStatusService(contraste));
    throw new Error('Method not implemented.');
  }

  getRegioes() { return this._regioes; }

  getRegiao(regiaoId) {
    return this._regioes.find(regiao => regiaoId === regiao.id );
  }
   // tslint:disable-next-line:member-ordering

   // tslint:disable-next-line:no-shadowed-variable
   /* getStatusService(contraste) {
     if (contraste === 'contrast') {
       alert('contraste!');
       this.flagStatus = true;

     } else {
       alert('nao contraste');
       this.flagStatus = false;
     }
     console.log(this.flagStatus, '<==== contraste');
     return this.flagStatus;

   }*/

}
