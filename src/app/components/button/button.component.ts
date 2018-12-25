import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonText = 'Enviar';
  @Input() useConfigKnown = true;
  @Input() buttonType = ''; // class to define kind of button
  @Input() externalClasses = ''; // It will just apply when defaultConfig is false
  @Input() buttonBorder = '';
  @Input() buttonSize = '';
  @Input() fullWidth = false;
  @Input() disabled = false;
  private readonly baseClass = 'gc-button';
  @Output() clickEvent = new EventEmitter<HTMLElement>();

  constructor() { }

  click(target: HTMLElement): void {
    this.clickEvent.emit(target);
  }

  public get buttonClassesObject() {
    return this.useConfigKnown ? this.appliedClasses : this.externalClasses;
  }

  public get appliedClasses() {
    const baseClass = this.baseClass;
    const modifiedClass = this.buttonType === '' ? '' : `${this.baseClass}--${this.buttonType}`;
    const border = this.borderClass[this.getValidKey(Object.keys(this.borderClass), this.buttonBorder)];
    const size = this.sizeClass[this.getValidKey(Object.keys(this.sizeClass), this.buttonSize)];
    const fullWidth = this.fullWidth ? 'full-width' : '';
    const disabledClass = this.disabled ? 'disabled' : '';
    return [baseClass, modifiedClass, border, size, fullWidth, disabledClass];
  }

  public get buttonClass() {
    return {
      'primary': 'primary',
      '': ''
    };
  }

  public get borderClass() {
    return {
      'normal': 'normal-border',
      'small': 'small-border',
      'large': 'large-border',
      '': ''
    };
  }

  public get sizeClass() {
    return {
      'normal': 'normal-size',
      'small': 'small-size',
      'large': 'large-size',
      '': ''
    };
  }

  private getValidKey(keyArray: string[], key: string) {
    return keyArray.includes(key) ? key : '';
  }
}
