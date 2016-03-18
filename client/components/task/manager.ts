import {Component} from "angular2/core";

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

}