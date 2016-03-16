import {Component} from 'angular2/core';
import {AccountsUI} from 'meteor-accounts-ui';

import {InsertTaskForm} from './insert-form';
import {TaskItem} from './list-item';

import {Tasks} from 'collections/task';
(<any>window).Tasks = Tasks;

@Component({
  selector: '[taskList]',
  directives: [InsertTaskForm, TaskItem, AccountsUI],
  template: `
    <div class="quick-commands">
      <div class="insert-task-form" insertTaskForm></div>
    </div>
    <div *ngFor="#task of tasks">
      <task-list-item [task]="task" (destroy)="destroyTask($event)"></task-list-item>
    </div>
  `
})

export class TaskList {
  public tasks: Mongo.Cursor<Task>;

  constructor () {
    this.tasks = Tasks.find();
  }

  public destroyTask (instance: Task) {
    Tasks.remove(instance._id);
  }
}