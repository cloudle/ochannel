import {Component} from "angular2/core";
import {TaskManagerList} from "./list";

@Component({
  directives: [TaskManagerList],
  template: `<div class="content-wrapper vertical flex">
    <div class="list-pane horizontal flex" taskManagerList></div>
    <div class="kernel-pane">
      <div class="quick-commands">Quick</div>
    </div>
  </div>`
})

export class TaskManager {

}