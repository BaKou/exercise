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


  it('should convert', () => {
    expect(service.convertToBit(0)).toBe('0');
  });

  it('should convert', () => {
    expect(service.convertToBit(1)).toBe('1');
  });

  it.each(
    [
      [100, '1100100'],
      [1, '1'],
      [0, '0'],
      [69, '1000101'],
      [1023, '1111111111'],
      [511, '111111111'],
      [666, '1010011010'],
      [123, '1111011'],
      [621, '1001101101'],
      [824, '1100111000'],
    ]
  )('should convert number to bit', (a, expected) => {
    expect(service.convertToBit(a)).toBe(expected);
  });
});
