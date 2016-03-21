import {Component, Input} from "angular2/core";
import {RouteParams} from 'angular2/router';

import {Projects} from "../../../collections/project";

import {Tasks} from "../../../collections/task";
import {ApplicationService} from "../../services/application";
import {TaskListItem} from "./task-list-item";

import {InsertTaskForm} from "./insert-task-form";

@Component({
  selector: '[taskList]',
  directives: [TaskListItem, InsertTaskForm],
  template: `
    <div class="quick-commands">Quick</div>
    <div class="kernel-content">
      <div class="kernel-title">Project name</div>
      <div class="kernel-item task vertical flex" *ngFor="#task of tasks"
           taskListItem [task]="task" (destroy)="destroyTask($event)"></div>

      <div class="kernel-inserter" insertTaskForm [project]="activeProject"></div>
    </div>
  `
})

export class TaskList {
  public activeProject: Project;
  public tasks: Mongo.Cursor<Task>;
  public editingNode:Task;

  constructor (public applicationService: ApplicationService, params: RouteParams) {
    var projectId = params.get('projectId'), taskQuery;

    this.activeProject = Projects.findOne(projectId);
    taskQuery  = this.activeProject ? {projectId} : {projectId: {$exists: false}};

    this.tasks = Tasks.find(taskQuery);
  }

  destroyTask (instance: Task) {
    Tasks.remove(instance._id);
  }
}