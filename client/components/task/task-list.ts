import {Component} from "angular2/core";
import {Tasks} from "../../../collections/task";

@Component({
  selector: '[taskList]',
  directives: [],
  template: `
    <div class="quick-commands">Quick</div>
    <div class="kernel-content">
      <div class="kernel-item task" *ngFor="#task of tasks">{{task.name}}</div>
    </div>
  `
})

export class TaskList {
  public tasks: Mongo.Cursor<Task>;

  constructor () {
    this.tasks = Tasks.find();
  }

  destroyTask (instance: Task) {
    Tasks.remove(instance._id);
  }
}