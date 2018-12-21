import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonText = 'Enviar';
  @Input() defaultConfig = true;
  @Input() buttonType = 'primary'; // class to define kind of button
  @Input() externalClasses = ''; // It will just apply when defaultConfig is false
  private readonly externalClassKey = 'external-class';

  constructor() { }

  ngOnInit() {
  }

  clickEvent(target: HTMLElement): void {
    console.log('target: ', target.className);
  }

  public get buttonClassesObject() {
    const buttonType = this.defaultConfig ? this.buttonType : this.externalClassKey;
    return {
      ...this.appliedClasses[buttonType]
    };
  }

  public get appliedClasses() {
    const classes = {};
    classes[this.externalClassKey] = {};
    return {
      'primary': {
        'gc-button gc-button--primary': this.defaultConfig
      },
      'secondary': {
        'gc-button gc-button--secondary': this.defaultConfig
      }
    };
  }
}
