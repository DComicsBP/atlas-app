import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe02'
})
export class IframeSafePipe02 implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }

  transform(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
