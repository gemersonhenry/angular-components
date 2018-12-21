import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-animations',
  templateUrl: './button-animations.component.html',
  styleUrls: ['./button-animations.component.scss']
})
export class ButtonAnimationsComponent implements OnInit {

  public buttonSize = 'small';

  constructor() { }

  ngOnInit() {
  }

  public changeSize(target: HTMLElement): void {
    this.buttonSize = this.buttonSize === 'small' ? 'large' : 'small';
    console.log('buttonSize: ', this.buttonSize);
  }

}
