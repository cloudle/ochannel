import {Component} from "angular2/core";
import {RouteParams} from 'angular2/router';

import {Projects} from "../../../collections/project";

import {ProjectList} from "./project-list";
import {TaskList} from "./task-list";

@Component({
  directives: [ProjectList, TaskList],
  template: `<div class="content-wrapper vertical flex">
    <div class="list-pane horizontal flex" projectList></div>
    <div class="kernel-pane horizontal flex" taskList>
      <div class="quick-commands">Quick</div>
    </div>
  </div>`
})

export class TaskManager {
  public project: Project;

  constructor (params: RouteParams) {
    var projectId = params.get('projectId');

    this.project = Projects.findOne({projectId});
  }
}