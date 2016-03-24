import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegComponent, NewKegComponent],
  template: `
  <keg-display *ngFor="#kegItem of kegList" [keg]="kegItem">
  </keg-display>
  <new-keg (onSubmitNewKeg)="createKeg($event)">
  </new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public selectedKeg: Keg;
  constructor() {

  }
  createKeg(name: string): void {
    this.kegList.push(
      new Keg(name)
    );
    console.log(this.kegList);
  }
}
