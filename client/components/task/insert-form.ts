import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';

import {Tasks} from 'collections/task';

@Component({
  selector: 'insert-task-form',
  template: `<form [ngFormModel]="tasksForm" (submit)="insertTask()">
    <h1>{{tasksForm.valid}}</h1>
    <label>Name</label>
    <input type="text" ngControl="name">
    <label>Description</label>
    <input type="text" ngControl="description">
    <label>Location</label>
    <input type="text" ngControl="location">
    <button>Add</button>
  </form>`
})

export class InsertTaskForm {
  public tasksForm;

  constructor () {
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