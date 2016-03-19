import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {RouterLink} from 'angular2/router';

//[routerLink]="['/TaskDetails', {taskId: task._id}]"
@Component({
  selector: '[taskListItem]',
  directives: [RouterLink],
  template: `
    <div class="item-status icon-stopwatch"></div>
    <div class="item-content">
      <input [ngModel]="task.name" />
      <div class="meta">
        <div class="command icon-scissors" (click)="destroy.emit(task)"></div>
      </div>
    </div>
  `
})

export class TaskListItem {
  @Input() task:Task;
  @Output() destroy: EventEmitter<any> = new EventEmitter();

  constructor () {

  }
}