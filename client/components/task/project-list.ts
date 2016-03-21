import {Component, Input} from "angular2/core";
import {Router, RouterLink} from "angular2/router";
import {AccountsUI} from "meteor-accounts-ui";

import {InsertTaskForm} from "./insert-task-form";
import {InsertProjectForm} from "./insert-project-form";
import {TaskListItem} from "./task-list-item";

import {Tasks} from "../../../collections/task";
import {Projects} from "../../../collections/project";
import {TodoLinks} from "../../logics/config";

(<any>window).Tasks = Tasks;
(<any>window).Projects = Projects;

@Component({
  selector: '[projectList]',
  directives: [InsertTaskForm, InsertProjectForm, TaskListItem, RouterLink, AccountsUI],
  template: `
    <div class="quick-commands">
      <span>Quick</span>
    </div>
    <div class="list-header">
      <div class="item-category" *ngFor="#link of todoLinks" [ngClass]="link.icon" [routerLink]="link.route">
        <span [innerHtml]="link.title"></span>
      </div>
    </div>
    <div class="list-tabs vertical flex">
      <div class="tab-menu active">Projects</div>
      <div class="tab-menu">Company</div>
      <div class="tab-menu">Priority</div>
    </div>
    <div class="list-content">
      <div class="list-item project icon-record" *ngFor="#project of projects" (click)="navigateToProject(project)">
        <span>{{project.name}}</span>
        <div class="meta">
          <div class="command icon-scissors" (click)="destroyProject($event, project)"></div>
        </div>
      </div>
      <!--<div *ngFor="#task of tasks" taskListItem [task]="task" (destroy)="destroyTask($event)"></div>-->
      <div class="list-inserter" insertProjectForm></div>
    </div>
  `
})

export class ProjectList {
  public projects: Mongo.Cursor<Project>;
  public activeProject: Project;
  public todoLinks: Array<AppLink>;

  constructor (public router: Router) {
    this.projects = Projects.find();
    this.todoLinks = TodoLinks;
  }

  public destroyProject (event, instance: Task) {
    event.stopPropagation();
    Projects.remove(instance._id);
  }

  public navigateToProject (instance: Project) {
    this.router.navigate(['TaskManager', {projectId: instance._id}]);
  }
}