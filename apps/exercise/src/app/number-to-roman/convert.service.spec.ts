import { TestBed } from '@angular/core/testing';

import { ConvertService } from './convert.service';

describe('ConvertService', () => {
  let service: ConvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it.each(
    [
      [1, 'I'],
      [2, 'II'],
      [3, 'III'],
      [4, 'IV'],
      [5, 'V'],
      [6, 'VI'],
      [7, 'VII'],
      [8, 'VIII'],
      [9, 'IX'],
      [10, 'X'],
    ]
  )('should convert number under ten to roman numeral', (a, expected) => {
    expect(service.convertToRoman(a)).toBe(expected);
  });

  it.each(
    [
      [12, 'XII'],
      [24, 'XXIV'],
      [36, 'XXXVI'],
      [45, 'XLV'],
      [58, 'LVIII'],
      [69, 'LXIX'],
      [71, 'LXXI'],
      [83, 'LXXXIII'],
      [99, 'XCIX'],
      [100, 'C'],
    ]
  )('should convert number under one hundred to roman numeral', (a, expected) => {
    expect(service.convertToRoman(a)).toBe(expected);
  });

  it.each(
    [
      [145, 'CXLV'],
      [256, 'CCLVI'],
      [322, 'CCCXXII'],
      [456, 'CDLVI'],
      [523, 'DXXIII'],
      [667, 'DCLXVII'],
      [778, 'DCCLXXVIII'],
      [889, 'DCCCLXXXIX'],
      [921, 'CMXXI'],
      [1000, 'M'],
    ]
  )('should convert number under One thousand to roman numeral', (a, expected) => {
    expect(service.convertToRoman(a)).toBe(expected);
  });

  it.each(
    [
      [1234, 'MCCXXXIV'],
      [2560, 'MMDLX'],
      [3968, 'MMMCMLXVIII'],
      [4269, 'MMMMCCLXIX'],
      [5934, 'MMMMMCMXXXIV'],
      [6978, 'MMMMMMCMLXXVIII'],
      [7945, 'MMMMMMMCMXLV'],
      [8594, 'MMMMMMMMDXCIV'],
      [9059, 'MMMMMMMMMLIX'],
      [10534, 'MMMMMMMMMMDXXXIV'],
    ]
  )('should convert number over One thousand to roman numeral', (a, expected) => {
    expect(service.convertToRoman(a)).toBe(expected);
  });
});
