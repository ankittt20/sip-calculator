import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestNowComponent } from './invest-now/invest-now.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {
    path: '',
    component: CalculatorComponent,
  },
  {
    path: 'invest-now',
    component: InvestNowComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
