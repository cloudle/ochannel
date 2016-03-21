import {Component, Input, EventEmitter} from "angular2/core";
import {FormBuilder, ControlGroup, Validators} from "angular2/common";
import {MeteorComponent} from "angular2-meteor";
import {InjectUser} from "meteor-accounts";

import {ApplicationService} from "../../services/application";

import {Tasks} from "../../../collections/task";
import {FocusDirective} from "../../directives/focus";

@Component({
  selector: '[insertTaskForm]',
  directives: [FocusDirective],
  template: `<div class="empty-wrapper" (click)="toggleInsert($event)">
    <div class="insert-mask icon-plus" *ngIf="!inserting">
      <span>Add task..</span>
    </div>
    <form class="vertical flex" *ngIf="inserting" [ngFormModel]="taskForm" (submit)="insertTask()">
      <div class="insert-status icon-stopwatch"></div>
      <div class="insert-content">
        <input type="text" ngControl="name" [focus]="insertingFocus" (keydown)="keyDownHandler($event)">
      </div>
    </form>
  </div>`
})

@InjectUser()
export class InsertTaskForm extends MeteorComponent {
  @Input() project: Project;
  public user: Meteor.User;
  public taskForm;
  private insertingFocus = new EventEmitter();
  public inserting: boolean = false;
  public globalClickSubscription;

  constructor (public applicationService: ApplicationService) {
    super();
    var formBuilder = new FormBuilder();
    this.taskForm = formBuilder.group({
      name: ['', Validators.required]
    });

    this.globalClickSubscription = applicationService.globalClick.subscribe(event => {
      this.inserting = false;
    });
  }

  ngOnDestroy () {
    this.globalClickSubscription.unsubscribe();
  }

  public insertTask() {
    var name:string = this.taskForm.value.name,
      newTask: Task = { name, creator: this.user._id, comments: [] };

    if (this.project) newTask.projectId = this.project._id;

    Tasks.insert(newTask);
    Object.keys(this.taskForm.controls).forEach(key => {
      this.taskForm.controls[key].updateValue('');
    });
  }

  public keyDownHandler (event) {
    if (event.keyCode === 27) {
      this.inserting = false;
    }
  }

  toggleInsert (event) {
    event.stopPropagation();
    this.inserting = true;
    setTimeout(() => this.insertingFocus.emit(null), 0);
  }

  public toggleMask () {
    this.inserting = false;
  }
}