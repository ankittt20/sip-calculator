import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalculatorComponent {
  monthlyInvestment = 5000;
  rateOfInterest = 12;
  investmentPeriod = 10;

  investedAmount = 0;
  estimatedReturns = 0;
  totalValue = 0;

  updateMonthlyInvestment(event: any) {
    this.monthlyInvestment = event.target.value;
    this.calculateSIP();
  }

  updateRateOfInterest(event: any) {
    this.rateOfInterest = event.target.value;
    this.calculateSIP();
  }

  updateInvestmentPeriod(event: any) {
    this.investmentPeriod = event.target.value;
    this.calculateSIP();
  }

  calculateSIP() {
    const monthlyRate = this.rateOfInterest / 100 / 12;
    const numberOfMonths = this.investmentPeriod * 12;
    const gauge = document.querySelector('ef-swing-gauge') as any;

    const futureValue =
      ((this.monthlyInvestment *
        (Math.pow(1 + monthlyRate, numberOfMonths) - 1)) /
        monthlyRate) *
      (1 + monthlyRate);
    this.investedAmount = this.monthlyInvestment * numberOfMonths;
    this.estimatedReturns = futureValue - this.investedAmount;
    this.totalValue = futureValue;

    gauge.primaryValue = this.investedAmount;
    gauge.secondaryValue = this.estimatedReturns;

    const investedAmountElement = document.getElementById('investedAmount');
    if (investedAmountElement) {
      investedAmountElement.innerHTML = '₹ ' + this.investedAmount.toString();
    }

    const estdReturnsElement = document.getElementById('estimatedReturns');
    if (estdReturnsElement) {
      estdReturnsElement.innerHTML =
        '₹ ' + this.estimatedReturns.toFixed(2).toString();
    }

    const futureValueElement = document.getElementById('futureValue');
    if (futureValueElement) {
      futureValueElement.innerHTML =
        '₹ ' + this.totalValue.toFixed(2).toString();
    }
  }
}
