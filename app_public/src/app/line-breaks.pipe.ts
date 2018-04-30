import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreaks'
})
export class LineBreaksPipe implements PipeTransform {

  transform(text: string): string {
    return text.replace(/\n/g,'<br/>');
  }

}
