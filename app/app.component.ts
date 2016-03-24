import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
    <h1>Tap Room</h1>
    <keg-list
    [kegList]="kegs" (onKegSelect)="kegWasSelected($event)">
    </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [];
  }
  kegWasSelected(clickedKeg): void {
    console.log(clickedKeg, 'this is the click even in the parent app');
  }
}
