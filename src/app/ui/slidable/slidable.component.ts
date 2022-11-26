import { Form, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ui-slidable',
  templateUrl: './slidable.component.html',
  styleUrls: ['./slidable.component.scss']
})
export class SlidableComponent implements OnInit {

  @Input()
  formBuilder: FormBuilder | null = null

  public slidableInputForm: FormGroup | undefined;

  @Input()
  title = ''

  @Output()
  scaledValue = new EventEmitter<Number>()


  _scaledValue = 0

  constructor() { }

  ngOnInit(): void {
    this.slidableInputForm = this.buildForm(this.formBuilder)
  }

  buildForm = (formBuilder:FormBuilder) => {
    return formBuilder.group({ } )
   }

  @Input()
  formatLabel: (value:number) => number = (value : number) => this._scaledValue

  onSlidableTextInput(event: Event) {

  }

}
