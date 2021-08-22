import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CalculatorInputValidator {
  constructor() {}
}

export type CalculatorInput = {
  currentAge: number;
  retirementAge: number;
  annualIncome: string;
  savingsRate: string;
};
