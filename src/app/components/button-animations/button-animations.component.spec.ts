import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAnimationsComponent } from './button-animations.component';

describe('ButtonAnimationsComponent', () => {
  let component: ButtonAnimationsComponent;
  let fixture: ComponentFixture<ButtonAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
