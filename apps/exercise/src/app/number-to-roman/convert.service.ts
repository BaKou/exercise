import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  private _decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  private _romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  private _romanized = '';

  constructor() { }

  public convertToRoman(numberToConvert: number): string {
    this._romanized = '';

    for (var index = 0; index < this._decimalValue.length; index++) {
      while (this._decimalValue[index] <= numberToConvert) {
        this._romanized += this._romanNumeral[index];
        numberToConvert -= this._decimalValue[index];
      }
    }
    return this._romanized;
  }
}
