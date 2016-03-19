import {Component} from "angular2/core";
import {AccountsUI} from "meteor-accounts-ui";

import {InsertTaskForm} from "./insert-task-form";
import {InsertProjectForm} from "./insert-project-form";
import {TaskListItem} from "./task-list-item";

import {Tasks} from "../../../collections/task";
import {Projects} from "../../../collections/project";

(<any>window).Tasks = Tasks;
(<any>window).Projects = Projects;

@Component({
  selector: '[projectList]',
  directives: [InsertTaskForm, InsertProjectForm, TaskListItem, AccountsUI],
  template: `
    <div class="quick-commands">
      <span>Quick</span>
    </div>
    <div class="list-header">
      <div class="item-category active icon-appbar-page-corner-bookmark">Inbox</div>
      <div class="item-category icon-appbar-calendar-dollar">Today</div>
      <div class="item-category icon-appbar-calendar-week">Next 7 days</div>
    </div>
    <div class="list-tabs vertical flex">
      <div class="tab-menu active">Projects</div>
      <div class="tab-menu">Company</div>
      <div class="tab-menu">Priority</div>
    </div>
    <div class="list-content">
      <div class="list-item project icon-record" *ngFor="#project of projects">
        <span>{{project.name}}</span>
        <div class="meta">
          <div class="command icon-scissors" (click)="destroyProject(project)"></div>
        </div>
      </div>
      <!--<div *ngFor="#task of tasks" taskListItem [task]="task" (destroy)="destroyTask($event)"></div>-->
      <div class="list-inserter" insertProjectForm></div>
    </div>
  `
})

export class ProjectList {

  public projects: Mongo.Cursor<Project>;

  constructor () {
    this.projects = Projects.find();
  }

  public destroyProject (instance: Task) {
    Projects.remove(instance._id);
  }
}