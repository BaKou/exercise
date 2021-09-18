import { Component, OnInit } from '@angular/core';
import { ConvertService } from './convert.service';

@Component({
  selector: 'exercise-number-to-bit',
  templateUrl: './number-to-bit.component.html',
  styleUrls: ['./number-to-bit.component.scss']
})
export class NumberToBitComponent implements OnInit {

  convertedNumber = '';
  numberToConvert = 0;

  constructor(private readonly convertService: ConvertService) { }

  ngOnInit(): void {
  }

  public convert(num: any): void {
    this.convertedNumber = this.convertService.convertToBit(num as number);
  }
}
