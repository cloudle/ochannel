import {Injectable, EventEmitter} from "angular2/core";

@Injectable()
export class ApplicationService {
  public globalClick = new EventEmitter();

  emitGlobalClick (event) {
    this.globalClick.emit(event);
  }
}