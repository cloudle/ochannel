import {Component, View, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, APP_BASE_HREF, RouteConfig} from 'angular2/router';
import {bootstrap} from 'angular2-meteor';

import {TaskList} from './task/list';
import {TaskDetails} from './task/details';
import {MenuPane} from "./menu/pane";
import {TaskManager} from "./task/manager";

@Component({
  selector: 'app',
  directives: [MenuPane, ROUTER_DIRECTIVES],
  template: `<div class="application-wrapper">
    <div menu-pane class="menu-pane horizontal flex"></div>
    <router-outlet></router-outlet>
  </div>`
})

@RouteConfig([
  { path: '/', as: 'Home', component: TaskList },
  { path: '/todo', as: 'TaskManager', component: TaskManager },
  { path: '/task/:taskId', as: 'TaskDetails', component: TaskDetails }
])

class Application { }

bootstrap(Application, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);