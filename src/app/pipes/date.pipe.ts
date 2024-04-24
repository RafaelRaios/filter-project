import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: string): string {
    const INVALID_DATE = !date

    //if(INVALID_DATE) return "Data de cadastro inválida";
    return `${date.substring(8,10)}/${date.substring(5,7)}/${date.substring(0,4)}`
  }

}
