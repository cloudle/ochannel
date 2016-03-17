import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  selector: '[taskListItem]',
  directives: [RouterLink],
  template: `
    <a [routerLink]="['/TaskDetails', {taskId: task._id}]" [innerHtml]="task.name"></a>
    <button (click)="destroy.emit(task)">Remove</button>
  `
})

export class TaskListItem {
  @Input() task:Task;
  @Output() destroy: EventEmitter<any> = new EventEmitter();
}