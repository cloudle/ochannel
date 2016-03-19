import {Component} from "angular2/core";

import {Tasks} from "../../../collections/task";
import {ApplicationService} from "../../services/application";
import {TaskListItem} from "./task-list-item";

import {InsertTaskForm} from "./insert-task-form";

@Component({
  selector: '[taskList]',
  directives: [TaskListItem, InsertTaskForm],
  template: `
    <div class="quick-commands">Quick</div>
    <div class="kernel-content">
      <div class="kernel-title">Project name</div>
      <div class="kernel-item task vertical flex" *ngFor="#task of tasks"
           taskListItem [task]="task" (destroy)="destroyTask($event)"></div>

      <div class="kernel-inserter" insertTaskForm></div>
    </div>
  `
})

export class TaskList {
  public tasks: Mongo.Cursor<Task>;
  public editingNode:Task;

  constructor (public applicationService: ApplicationService) {
    this.tasks = Tasks.find();
  }

  destroyTask (instance: Task) {
    Tasks.remove(instance._id);
  }
}