import {Component} from 'angular2/core';
import {AccountsUI} from 'meteor-accounts-ui';

import {InsertTaskForm} from './insert-form';
import {TaskItem} from './list-item';

import {Tasks} from 'collections/task';
(<any>window).Tasks = Tasks;

@Component({
  selector: 'task-item',
  directives: [InsertTaskForm, TaskItem, AccountsUI],
  template: `<div>
    <h1>Hi!</h1>
    <accounts-ui></accounts-ui>
    <insert-task-form></insert-task-form>
    <div *ngFor="#task of tasks">
      <task-list-item [task]="task" (destroy)="destroyTask($event)"></task-list-item>
    </div>
  </div>`
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