import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desconto',
  pure:true
})
export class DescontoPipe implements PipeTransform {

  transform(valor: number | undefined | null, percentual=0): number {
    if(typeof valor != 'number' || isNaN(valor)){
      return 0;
    }

    const percFinal = Math.min(Math.max(percentual,0), 100);

    const valDesc = valor*(1-percFinal/100);
    return Math.round(valor *(1-percFinal/100));
  }

}
