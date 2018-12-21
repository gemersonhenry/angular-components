import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentListComponent } from './component-list/component-list.component';

export const appRoutes: Routes = [
  { path: 'component-list', component: ComponentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
