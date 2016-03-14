import {Component, View, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, APP_BASE_HREF, RouteConfig} from 'angular2/router';
import {bootstrap} from 'angular2-meteor';

import {InsertTaskForm} from './task/insert-form';
import {TaskItem} from './task/list-item';
import {TaskList} from './task/list';
import {TaskDetails} from './task/detail';

@Component({
  selector: 'app',
  directives: [InsertTaskForm, TaskItem, ROUTER_DIRECTIVES],
  template: `<router-outlet></router-outlet>`
})

@RouteConfig([
  { path: '/', as: 'TaskList', component: TaskList },
  { path: '/task/:taskId', as: 'TaskDetails', component: TaskDetails }
])

class Application { }

bootstrap(Application, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);