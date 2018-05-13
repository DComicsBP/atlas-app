import { Injectable, AnimationEntryMetadata } from '@angular/core';
import { router01, router02, router03 } from './router';

@Injectable()
export class MaterialService {

  constructor() {
    this.cursos =
    [
        {id: 1, ob: {id: '1', router: router01}},
        {id: 2, ob: {id: '2', router: router02}},
        {id: 3, ob: {id: '3', router: router03}}
      ]; }
private cursos: AnimationEntryMetadata[] = [];


getCursos() { return this.cursos; }

getCurso(id) { return this.cursos.find(curso => id === curso.id ); }

}
