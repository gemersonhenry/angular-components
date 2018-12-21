import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { ButtonAnimationsComponent } from './components/button-animations/button-animations.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentListComponent,
    ButtonComponent,
    ButtonAnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
