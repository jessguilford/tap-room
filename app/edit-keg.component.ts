import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  inputs: ['keg'],
  template: `
    <div>
    <h3>Edit Keg</h3>
    <input [(ngModel)]="keg.name" />
    </div>
  `
})
export class EditKegComponent {
  public keg: Keg;
}
