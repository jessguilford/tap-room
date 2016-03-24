import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    <h1>Tap Room</h1>
    <task-list>
    </task-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  
}
