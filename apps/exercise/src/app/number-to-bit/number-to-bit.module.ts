import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberToBitComponent } from './number-to-bit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: NumberToBitComponent },
];

@NgModule({
  declarations: [NumberToBitComponent],
  imports: [
    RouterModule.forChild(
      appRoutes,
    ),
    CommonModule,
    FormsModule
  ]
})
export class NumberToBitModule { }
