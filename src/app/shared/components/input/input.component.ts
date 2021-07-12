import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() set value(value: any) {
    this.inputValue = value;
    this.writeValue(value);
  }

  get value(): any {
    return this.inputValue;
  }

  inputValue: any;

  constructor() { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  onChange(value: string): void  {}
  onTouched(value: string): void  {}

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.onChange(value);
  }

}
