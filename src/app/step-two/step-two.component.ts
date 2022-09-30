import { Component, ElementRef, OnInit } from "@angular/core";
import { BalanceService, Balance } from "src/app/services/balance.service";
import { User, UserService } from "src/app/services/user.service";
import { CalculatorInput } from "src/app/services/validators.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'retcalc-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  public calculatorInputForm: FormGroup;
  private const inputs: Map<string,string> = new Map();
  const FIELD_EXISTING_SAVINGS: string = 'existingSavings';
  inputs.set(FIELD_EXISTING_SAVINGS, '')

  ngOnInit(): void {
  }

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.calculatorInputForm = this.buildForm(formBuilder)
  }

  buildForm = (formBuilder:FormBuilder) => {
    return formBuilder.group({
      existingSavings: [
        null,
        Validators.compose([Validators.required, Validators.min(0)])
      ],
      existingSavingsText: [
        null,
        Validators.compose([Validators.required, Validators.min(0)])
      ],
      growthRate: [
        null,
        Validators.compose([Validators.required, Validators.min(0)])
      ],
      growthRateText: [
        null,
        Validators.compose([Validators.required, Validators.min(0)])
      ],
      fmi: [
        null,
        Validators.compose([Validators.required, Validators.min(0)])
      ],
      fmiText: [
        null,
        Validators.compose([Validators.required, Validators.min(0)])
      ],
      annualIncome: [null, Validators.required],
      savingsRate: [null, Validators.required]
    });
  }

  get existingSavings():any {
    return this.getAttribute('existingSavings')
  }

  set existingSavings(event: Event) {
    this.getAttribute('existingSavings')?.setValue(event.target)
  }

  get growthRate():any {
    return this.getAttribute('growthRate')
  }

  set growthRate(event: Event) {
    this.getAttribute('growthRate')?.setValue(event.target)
  }

  get fmi():any {
    return this.getAttribute('fmi')
  }

  set fmi(event: Event) {
    this.getAttribute('fmi')?.setValue(event.target)
  }

  getAttribute = (name: string) => {
    return this.calculatorInputForm.get(name)
  }

  initComponents = () => {

    const eSavings = this.calculatorInputForm.get('existingSavings')
    const eSavingsText = this.calculatorInputForm.get('existingSavingsText')

    eSavings?.valueChanges.subscribe(v => {eSavingsText?.setValue(v, {emitEvent: false})})
    eSavingsText?.valueChanges.subscribe(v => {eSavings?.setValue(v, {emitEvent: false})})

    const growthRate = this.calculatorInputForm.get('growthRate')
    const growthRateText = this.calculatorInputForm.get('growthRateText')

    growthRate?.valueChanges.subscribe(v => {growthRateText?.setValue(v, {emitEvent: false})})
    growthRateText?.valueChanges.subscribe(v => {growthRate?.setValue(v, {emitEvent: false})})

    const fmi = this.calculatorInputForm.get('fmi')
    const fmiText = this.calculatorInputForm.get('fmiText')

    fmi?.valueChanges.subscribe(v => {fmiText?.setValue(v, {emitEvent: false})})
    fmiText?.valueChanges.subscribe(v => {fmi?.setValue(v, {emitEvent: false})})
  }

  onAgeTextInput = (event: Event) => {
    let contentText = (event.target as Element).innerHTML
    const cText = this.calculatorInputForm.get('currentAgeText')
    cText?.setValue(contentText, {emitEvent: true})
    console.log("currentAgeText value change" + contentText)
  }

}
