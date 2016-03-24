import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';

@Component({
  selector: 'keg-list',
  template: `
  <keg-display *ngFor=#keg of kegList>
  </keg-display>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public selectedKeg: Keg;
  constructor() {
    
  }
}
