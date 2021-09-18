import { Component, OnInit } from '@angular/core';
import { ConvertService } from './convert.service';

@Component({
  selector: 'exercise-number-to-roman',
  templateUrl: './number-to-roman.component.html',
  styleUrls: ['./number-to-roman.component.scss']
})
export class NumberToRomanComponent implements OnInit {

  convertedNumber = '';
  numberToConvert = 0;

  constructor(private readonly convertService: ConvertService) { }

  ngOnInit(): void {
  }

  public convert(num: any): void {
    this.convertedNumber = this.convertService.convertToRoman(num as number);
  }

}
