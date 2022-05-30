import { Component, ElementRef, OnInit } from "@angular/core";
import { BalanceService, Balance } from "src/app/services/balance.service";
import { User, UserService } from "src/app/services/user.service";
import { CalculatorInput } from "src/app/services/validators.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-retcalc",
  templateUrl: "./retcalc.component.html",
  styleUrls: ["./retcalc.component.scss"]
})
export class RetcalcComponent {
  private userBalance: Balance = { dollars: 0, cents: 0 };
  public userDisplayName: String = "Adwait";
  public calculatorInputForm: FormGroup;
  isFocussed = false

  get currentAge(): any {
    return this.calculatorInputForm.get('currentAge')
  }
  set currentAge(event:Event) {
    this.calculatorInputForm.get('currentAge')?.setValue(event.target)
  }

  get planAge(): any {
    return this.calculatorInputForm.get('planAge')
  }
  set planAge(event:Event) {
    this.calculatorInputForm.get('planAge')?.setValue(event.target)
  }

  get retirementAge(): any {
    return this.calculatorInputForm.get('retirementAge')
  }
  set retirementAge(event:Event) {
    this.calculatorInputForm.get('retirementAge')?.setValue(event.target)
  }

  get balance() {
    return `${this.userBalance.dollars}.${(this.userBalance.cents < 10
      ? "0"
      : "") + this.userBalance.cents}`;
  }

  constructor(
    private userSvc: UserService,
    private balanceSvc: BalanceService,
    private formBuilder: FormBuilder
  ) {
    this.balanceSvc
      .getUserBalance()
      .subscribe(balance => (this.userBalance = balance));

    this.calculatorInputForm = this.buildForm(formBuilder)

    this.initComponents()
  }

  buildForm = (formBuilder:FormBuilder) => {
    return formBuilder.group({
      currentAge: [
        null,
        Validators.compose([Validators.required, Validators.min(18)])
      ],
      currentAgeText: [
        null,
        Validators.compose([Validators.required, Validators.min(18)])
      ],
      retirementAge: [
        null,
        Validators.compose([Validators.required, Validators.min(0)])
      ],
      retirementText: [
        null,
        Validators.compose([Validators.required, Validators.min(0)])
      ],
      planAge: [
        null,
        Validators.compose([Validators.required, Validators.min(0)])
      ],
      planText: [
        null,
        Validators.compose([Validators.required, Validators.min(0)])
      ],
      annualIncome: [null, Validators.required],
      savingsRate: [null, Validators.required]
    });
  }

  initComponents = () => {

    const cAge = this.calculatorInputForm.get('currentAge')
    const cText = this.calculatorInputForm.get('currentAgeText')

    cAge?.valueChanges.subscribe(v => {cText?.setValue(v, {emitEvent: false})})
    cText?.valueChanges.subscribe(v => {cAge?.setValue(v, {emitEvent: false})})

    const retirementAge = this.calculatorInputForm.get('retirementAge')
    const retirementText = this.calculatorInputForm.get('retirementText')

    retirementAge?.valueChanges.subscribe(v => {retirementText?.setValue(v, {emitEvent: false})})
    retirementText?.valueChanges.subscribe(v => {retirementAge?.setValue(v, {emitEvent: false})})

    const planAge = this.calculatorInputForm.get('planAge')
    const planText = this.calculatorInputForm.get('planText')

    planAge?.valueChanges.subscribe(v => {planText?.setValue(v, {emitEvent: false})})
    planText?.valueChanges.subscribe(v => {planAge?.setValue(v, {emitEvent: false})})
  }

  onAgeTextInput = (event: Event) => {
    let contentText = (event.target as Element).innerHTML
    const cText = this.calculatorInputForm.get('currentAgeText')
    cText?.setValue(contentText, {emitEvent: true})
    console.log("currentAgeText value change" + contentText)
  }

  onRetirmentAgeTextInput = (event: Event) => {
    let contentText = (event.target as Element).innerHTML
    const retirementText = this.calculatorInputForm.get('retirementText')
    retirementText?.setValue(contentText, {emitEvent: true})
    console.log("retirementText value change" + contentText)
  }

  onPlanAgeTextInput = (event: Event) => {
    let contentText = (event.target as Element).innerHTML
    const planText = this.calculatorInputForm.get('planText')
    planText?.setValue(contentText, {emitEvent: true})
    console.log("planText value change" + contentText)
  }

  onSubmit(formValues: CalculatorInput) {
    console.log({ formValues });
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.calculatorInputForm.controls[controlName].hasError(errorName);
  };
}
