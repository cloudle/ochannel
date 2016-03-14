import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Tasks} from 'collections/task';

@Component({
  selector: 'task-details',
  template: `<div>
    <h1 [innerHtml]="task.name"></h1>
  </div>`
})

export class TaskDetails {
  task: Object;

  constructor (params: RouteParams) {
    var taskId = params.get('taskId');
    this.task = Tasks.findOne(taskId);
  }
}