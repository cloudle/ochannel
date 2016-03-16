import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {MeteorComponent} from "angular2-meteor";
import {InjectUser} from 'meteor-accounts';

import {Tasks} from 'collections/task';

@Component({
  selector: '[insertTaskForm]',
  template: `<form [ngFormModel]="tasksForm" (submit)="insertTask()">
    <input type="text" ngControl="name">
  </form>`
})

@InjectUser()
export class InsertTaskForm extends MeteorComponent {
  public user: Meteor.User;
  public tasksForm;

  constructor () {
    super();
    console.log(this.user);
    var formBuilder = new FormBuilder();
    this.tasksForm = formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      location: ['']
    });
  }

  public insertTask() {
    Tasks.insert(this.tasksForm.value);
    Object.keys(this.tasksForm.controls).forEach(key => {
      this.tasksForm.controls[key].updateValue('');
    });
  }
}