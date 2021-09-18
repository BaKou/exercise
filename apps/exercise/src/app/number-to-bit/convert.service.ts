import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  private _bit = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
  private _convertedNumber = '';

  constructor() { }

  convertToBit(num: number) {
    this._convertedNumber = '';

    if (num === 0) {
      return '0';
    }
    let temporaryNumber = num;
    this._bit.forEach(b => {
      if (b <= temporaryNumber) {
        this._convertedNumber += '1';
        temporaryNumber = temporaryNumber - b;
      } else if (this._convertedNumber !== '') {
        this._convertedNumber += '0';
      }
    })

    return this._convertedNumber;
  }
}
