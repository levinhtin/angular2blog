import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ellipsis'
})

export class EllipsisPipe implements PipeTransform {
  public transform(val: string, args: number[]): string {
    if (args[0] === -1) {
      return val;
    }

    if (val.length > args[0]) {
      return val.substring(0, args[0]) + '...';
    } else {
      return val;
    }
  }
}
