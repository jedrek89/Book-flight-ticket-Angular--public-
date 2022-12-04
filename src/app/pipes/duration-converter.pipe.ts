import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationConverter'
})
export class DurationConverterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let hours = Math.floor(value / 60); 
    let minutes = value % 60;

    return `${hours} h ${minutes} m`;
  }

}
