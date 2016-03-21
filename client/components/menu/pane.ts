import {Component} from "angular2/core";
import {RouterLink} from "angular2/router";

import {AppLinks} from "../../logics/config";

@Component({
  selector: '[menuPane]',
  directives: [RouterLink],
  template: `
    <div class="user-area">Cloud Le</div>
    <div class="navigation-area">
      <div class="app-link" *ngFor="#link of appLinks" [ngClass]="link.icon" [routerLink]="link.route">
        <span [innerHtml]="link.title"></span>
      </div>
    </div>
    <div class="system-area">
      <span>system area</span>
    </div>
  `
})

export class MenuPane {
  public appLinks: Array<AppLink>;

  constructor () {
    this.appLinks = AppLinks;
  }
}