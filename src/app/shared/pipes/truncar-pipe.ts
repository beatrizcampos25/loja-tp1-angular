import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar',
  pure: true
})
export class Truncar implements PipeTransform {
  transform(
    valor: string | null | undefined,
    max = 100,
    limite = true,
    etc = '…'
  ): string {
    if (!valor) return '';
    if (valor.length <= max) 
      return valor;

    const parte = valor.slice(0, max);
    if (!limite) 
      return parte + etc;

    const espFinal = parte.lastIndexOf(' ');
    return (espFinal > 0 ? parte.slice(0, espFinal) : parte) + etc;
  }
}
