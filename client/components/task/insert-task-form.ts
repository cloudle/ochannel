import {Component} from "angular2/core";
import {FormBuilder, ControlGroup, Validators} from "angular2/common";
import {MeteorComponent} from "angular2-meteor";
import {InjectUser} from "meteor-accounts";

import {Tasks} from "../../../collections/task";
import {FocusDirective} from "../../directives/focus";

@Component({
  selector: '[insertTaskForm]',
  directives: [FocusDirective],
  template: `<form [ngFormModel]="taskForm" (submit)="insertTask()">
    <input type="text" ngControl="name">
  </form>`
})

@InjectUser()
export class InsertTaskForm extends MeteorComponent {
  public user: Meteor.User;
  public taskForm;

  constructor () {
    super();
    console.log(this.user);
    var formBuilder = new FormBuilder();
    this.taskForm = formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      location: ['']
    });
  }

  public insertTask() {
    Tasks.insert(this.taskForm.value);
    Object.keys(this.taskForm.controls).forEach(key => {
      this.taskForm.controls[key].updateValue('');
    });
  }
}