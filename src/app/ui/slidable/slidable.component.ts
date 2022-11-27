import { Form, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { inherits } from 'util';

@Component({
  selector: 'ui-slidable',
  templateUrl: './slidable.component.html',
  styleUrls: ['./slidable.component.scss']
})
export class SlidableComponent implements OnInit {


  @Input()
  slidableInputForm!: FormGroup;

  @Input()
  title!: string

  @Input()
  componentName!: string

  @Output()
  scaledValue = new EventEmitter<Number>()


  _scaledValue = 0

  constructor() { }

  getAttribute = (name: string) => {
    return this.slidableInputForm.get(name)
  }

  ngOnInit(): void {
      this.initScalable()
  }

  initScalable() {
    const scalable = this.getAttribute(this.componentName)
    const scalableText = this.getAttribute(this.componentName + "Text")

    scalable?.valueChanges.subscribe(v => {scalableText?.setValue(v, {emitEvent: false})})
    scalableText?.valueChanges.subscribe(v => {scalable?.setValue(v, {emitEvent: false})})
  }

  get slidable():any {
    return this.getAttribute(this.componentName)
  }

  set slidable(event: Event) {
    this.getAttribute(this.componentName)?.setValue(event.target)
  }

  @Input()
  formatLabel: (value:number) => number = (value : number) => this._scaledValue

  onSlidableTextInput= (event: Event) => {
    let contentText = (event.target as Element).innerHTML
    const scalableText = this.getAttribute(this.componentName + "Text")
    scalableText?.setValue(contentText, {emitEvent: true})
    console.log(this.componentName + "Text"+ " value change" + contentText)
  }

}
