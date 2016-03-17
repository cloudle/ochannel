import {Directive, EventEmitter, Input, ElementRef, Inject} from 'angular2/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective {
  private focusEmitterSubscription;
  // Now we expect EventEmmiter as binded value
  @Input('focus')
  set focus(focusEmitter) {
    if(this.focusEmitterSubscription) {
      this.focusEmitterSubscription.unsubscribe();
    }
    this.focusEmitterSubscription = focusEmitter.subscribe(
      (()=> this.element.nativeElement.focus()).bind(this))
  }
  constructor(@Inject(ElementRef) private element: ElementRef) {}
}
