import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  //pipe in adi ne olsun deye qeyd edirik
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) return null; //value gelmese null qaytarsin
    let _limit = limit ? limit : 20; //limit karakter gonderilibse parametr kimi limiti gotursun gonderilmeyibse 20 karakter gostersin
    return value.substr(0, _limit) + '...'; // geldiyi halda 20 karakter gostersin
  }
}
