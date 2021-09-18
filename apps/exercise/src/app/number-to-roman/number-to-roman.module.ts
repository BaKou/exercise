import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NumberToRomanComponent } from './number-to-roman.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: '', component: NumberToRomanComponent },
];

@NgModule({
  declarations: [NumberToRomanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes,
    ),
    FormsModule,
  ]
})
export class NumberToRomanModule { }
