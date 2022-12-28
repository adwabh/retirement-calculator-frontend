import { Component, ElementRef, OnInit } from "@angular/core";
import { BalanceService, Balance } from "src/app/services/balance.service";
import { User, UserService } from "src/app/services/user.service";
import { CalculatorInput } from "src/app/services/validators.service";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
const FIELD_EXISTING_SAVINGS: string = 'existingSavings';
const FIELD_GROWTH_RATE: string = 'growthRate';
const FIELD_FUTURE_MONTHLY_INCOME: string = 'fmi';
const FIELD_TEXT_EXISTING_SAVINGS: string = 'existingSavingsText';
const FIELD_TEXT_GROWTH_RATE: string = 'growthRateText';
const FIELD_TEXT_FUTURE_MONTHLY_INCOME: string = 'fmiText';

@Component({
  selector: 'retcalc-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})

export class StepTwoComponent implements OnInit {
  public calculatorInputForm: UntypedFormGroup;


  ngOnInit(): void {


  }

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.calculatorInputForm = this.buildForm(formBuilder)
  }

  buildForm = (formBuilder:UntypedFormBuilder) => {
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
    return this.getAttribute(FIELD_EXISTING_SAVINGS)
  }

  set existingSavings(event: Event) {
    this.getAttribute(FIELD_EXISTING_SAVINGS)?.setValue(event.target)
  }

  get growthRate():any {
    return this.getAttribute(FIELD_GROWTH_RATE)
  }

  set growthRate(event: Event) {
    this.getAttribute(FIELD_GROWTH_RATE)?.setValue(event.target)
  }

  get fmi():any {
    return this.getAttribute(FIELD_FUTURE_MONTHLY_INCOME)
  }

  set fmi(event: Event) {
    this.getAttribute(FIELD_FUTURE_MONTHLY_INCOME)?.setValue(event.target)
  }

  getAttribute = (name: string) => {
    return this.calculatorInputForm.get(name)
  }

  initComponents = () => {

    const eSavings = this.getAttribute(FIELD_EXISTING_SAVINGS)
    const eSavingsText = this.getAttribute(FIELD_TEXT_EXISTING_SAVINGS)

    eSavings?.valueChanges.subscribe(v => {eSavingsText?.setValue(v, {emitEvent: false})})
    eSavingsText?.valueChanges.subscribe(v => {eSavings?.setValue(v, {emitEvent: false})})

    const growthRate = this.getAttribute(FIELD_GROWTH_RATE)
    const growthRateText = this.getAttribute(FIELD_TEXT_GROWTH_RATE)

    growthRate?.valueChanges.subscribe(v => {growthRateText?.setValue(v, {emitEvent: false})})
    growthRateText?.valueChanges.subscribe(v => {growthRate?.setValue(v, {emitEvent: false})})

    const fmi = this.getAttribute(FIELD_FUTURE_MONTHLY_INCOME)
    const fmiText = this.getAttribute(FIELD_TEXT_FUTURE_MONTHLY_INCOME)

    fmi?.valueChanges.subscribe(v => {fmiText?.setValue(v, {emitEvent: false})})
    fmiText?.valueChanges.subscribe(v => {fmi?.setValue(v, {emitEvent: false})})
  }

  onExistingSavingsTextInput = (event: Event) => {
    let contentText = (event.target as Element).innerHTML
    const cText = this.getAttribute(FIELD_TEXT_EXISTING_SAVINGS)
    cText?.setValue(contentText, {emitEvent: true})
    console.log("currentAgeText value change" + contentText)
  }

  onGrowthRateTextInput = (event: Event) => {
    let contentText = (event.target as Element).innerHTML
    const cText = this.getAttribute(FIELD_TEXT_GROWTH_RATE)
    cText?.setValue(contentText, {emitEvent: true})
    console.log("currentAgeText value change" + contentText)
  }

  onFMITextInput = (event: Event) => {
    let contentText = (event.target as Element).innerHTML
    const cText = this.getAttribute(FIELD_TEXT_FUTURE_MONTHLY_INCOME)
    cText?.setValue(contentText, {emitEvent: true})
    console.log("currentAgeText value change" + contentText)
  }

  onSubmit(formValues: CalculatorInput) {
    console.log({ formValues });
    this.router.navigate(['step3'], { relativeTo: this.route.parent })
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
