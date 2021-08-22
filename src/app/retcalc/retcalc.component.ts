import { Component, OnInit } from "@angular/core";
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

  get balance() {
    return `${this.userBalance.dollars}.${(this.userBalance.cents < 10
      ? "0"
      : "") + this.userBalance.cents}`;
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
      
  }

  constructor(
    private userSvc: UserService,
    private balanceSvc: BalanceService,
    private formBuilder: FormBuilder
  ) {
    this.balanceSvc
      .getUserBalance()
      .subscribe(balance => (this.userBalance = balance));

    // const { first, last } = this.userSvc.user as User;
    // this.userDisplayName = `${first} ${last}`;
    this.calculatorInputForm = formBuilder.group({
      currentAge: [
        null,
        Validators.compose([Validators.required, Validators.min(18)])
      ],
      retirementAge: [
        null,
        Validators.compose([Validators.required, Validators.min(0)])
      ],
      annualIncome: [null, Validators.required],
      savingsRate: [null, Validators.required]
    });
  }

  onSubmit(formValues: CalculatorInput) {
    console.log({ formValues });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.calculatorInputForm.controls[controlName].hasError(errorName);
  };
}
