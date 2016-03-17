import {Component, EventEmitter} from "angular2/core";
import {FormBuilder, ControlGroup, Validators} from "angular2/common";
import {MeteorComponent} from "angular2-meteor";
import {InjectUser} from "meteor-accounts";

import {ApplicationService} from "../../services/application";

import {Projects} from "../../../collections/project";
import {FocusDirective} from "../../directives/focus";

@Component({
  selector: '[insertProjectForm]',
  directives: [FocusDirective],
  template: `<div class="empty-wrapper" (click)="toggleInsert($event)">
    <div class="insert-mask icon-plus" *ngIf="!inserting">
      <span>Add Project..</span>
    </div>
    <form *ngIf="inserting" [ngFormModel]="projectForm" (submit)="insertProject()">
      <div class="color-orb icon-record"></div>
      <input type="text" ngControl="name" [focus]="insertingFocus" (keydown)="keyDownHandler($event)">
    </form>
  </div>`
})

@InjectUser()
export class InsertProjectForm extends MeteorComponent {
  public user: Meteor.User;
  public projectForm;
  private insertingFocus = new EventEmitter();
  public inserting: boolean = false;
  public globalClickSubscription;

  constructor (public applicationService: ApplicationService) {
    super();
    var formBuilder = new FormBuilder();
    this.projectForm = formBuilder.group({
      name: ['', Validators.required]
    });

    this.globalClickSubscription = applicationService.globalClick.subscribe(event => {
      this.inserting = false;
    });
  }

  ngOnDestroy () {
    this.globalClickSubscription.unsubscribe();
  }

  public insertProject () {
    Projects.insert(this.projectForm.value);
    Object.keys(this.projectForm.controls).forEach(key => {
      this.projectForm.controls[key].updateValue('');
    });
  }

  public keyDownHandler (event) {
    if (event.keyCode === 27) {
      this.inserting = false;
    }
  }

  public toggleInsert (event) {
    event.stopPropagation();
    this.inserting = true;
    setTimeout(() => this.insertingFocus.emit(null), 0);
  }

  public toggleMask () {
    this.inserting = false;
  }
}