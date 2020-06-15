import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'verifyAccountNumber'
})
export class VerifyAccountNumberPipe implements PipeTransform {

  transform(value: string, length: number): string {
    return length ?
      (value.length === length ?
        value.substr(0, 4).padEnd(12, '*') :
        'account number incorrect') :
      value.substr(0, 4).padEnd(12, '*');
  }

}
