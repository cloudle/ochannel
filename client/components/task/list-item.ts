import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'task-list-item',
  directives: [RouterLink],
  template: `<div>
    <div>
      <a [routerLink]="['/TaskDetails', {taskId: task._id}]" [innerHtml]="task.name"></a>
      <button (click)="destroy.emit(task)">Remove</button>
    </div>
  </div>`
})

export class TaskItem {
  @Input() task:Task;
  @Output() destroy: EventEmitter<any> = new EventEmitter();
}