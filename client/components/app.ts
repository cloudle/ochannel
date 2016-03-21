import {Component, View, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, APP_BASE_HREF, RouteConfig} from 'angular2/router';
import {bootstrap} from 'angular2-meteor';

import {ApplicationService} from "../services/application";

import {TaskDetails} from './task/details';
import {MenuPane} from "./menu/pane";
import {TaskManager} from "./task/manager";
import {DiscussionHome} from "./discussion/home";

@Component({
  selector: 'app',
  directives: [MenuPane, ROUTER_DIRECTIVES],
  providers: [ApplicationService],
  template: `<div class="application-wrapper" (click)="globalClickHandler($event)">
    <div menuPane class="menu-pane horizontal flex"></div>
    <router-outlet></router-outlet>
  </div>`
})

@RouteConfig([
  { path: '/', as: 'Home', component: TaskManager },
  { path: '/todo/inbox', as: 'TaskManagerInbox', component: TaskManager },
  { path: '/todo/today', as: 'TaskManagerToday', component: TaskManager },
  { path: '/todo/week', as: 'TaskManagerWeek', component: TaskManager },
  { path: '/todo/:projectId', as: 'TaskManager', component: TaskManager },
  { path: '/task/:taskId', as: 'TaskDetails', component: TaskDetails },
  { path: '/discussion', as: 'Discussion', component: DiscussionHome }
])

class Application {
  constructor (public applicationService: ApplicationService) {

  }

  globalClickHandler (event) {
    this.applicationService.emitGlobalClick(event);
  }
}

bootstrap(Application, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);