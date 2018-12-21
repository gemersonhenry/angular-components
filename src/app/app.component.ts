import { Component, OnInit } from '@angular/core';
import { appRoutes } from './app-routing.module';
import { Route } from '@angular/router';

export interface IAppRoute {
  path: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public appRoutes: IAppRoute[] = [];

  constructor() {}

  ngOnInit(): void {
    this.appRoutes = appRoutes.map(this.getAppRouteElement);
  }

  private getAppRouteElement(route: Route): IAppRoute {
    return {
      path: `/${route.path}`,
      text: route.path.split('-').join(' ')
    } as IAppRoute;
  }
}
