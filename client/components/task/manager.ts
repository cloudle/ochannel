import {Component} from "angular2/core";
import {TaskList} from "./list";

@Component({
  directives: [TaskList],
  template: `<div class="content-wrapper vertical flex">
    <div class="list-pane" taskList></div>
    <div class="kernel-pane">
      <div class="quick-commands">Quick</div>
    </div>
  </div>`
})

export class TaskManager {

}