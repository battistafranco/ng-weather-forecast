import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: string, unit: string) {
    let number = parseInt(value);

    if (value && !isNaN(number)){

      if (unit === 'C') {
        var tempareature = (number - 32) / 1.8;
        return tempareature.toFixed(2);
      }
      if (unit === 'F') {
        var tempareature = (number * 32) + 1.8;
        return tempareature.toFixed(2);
      }
    }
    return;
  }

}