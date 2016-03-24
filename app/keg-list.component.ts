import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, NewKegComponent, EditKegComponent],
  template: `
    <keg-display *ngFor="#kegItem of kegList"
    (click)="kegClicked(kegItem)"
    [class.selected]="kegItem === selectedKeg"
    [keg]="kegItem">
    </keg-display>
    <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg">
    </edit-keg>
    <new-keg (onSubmitNewKeg)="createKeg($event)">
    </new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public selectedKeg: Keg;
  public onKegSelect: EventEmitter<Keg>;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    console.log(this.selectedKeg, 'this is the keg list click');
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(name: string): void {
    this.kegList.push(
      new Keg(name)
    );
    console.log(this.kegList);
  }
}
