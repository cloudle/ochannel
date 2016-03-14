import {Component} from 'angular2/core';

import {InsertTaskForm} from './insert-form';
import {TaskItem} from './list-item';

import {Tasks} from 'collections/task';
(<any>window).Tasks = Tasks;

@Component({
  selector: 'task-item',
  directives: [InsertTaskForm, TaskItem],
  template: `<div>
    <h1>Hi!</h1>
    <insert-task-form></insert-task-form>
    <div *ngFor="#task of tasks">
      <task-list-item [task]="task" (destroy)="destroyTask($event)"></task-list-item>
    </div>
  </div>`
})

export class TaskList {
  public tasks;

  constructor () {
    this.tasks = Tasks.find();
  }

  public destroyTask (instance) {
    Tasks.remove(instance._id);
  }
}