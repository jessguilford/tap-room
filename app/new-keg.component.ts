import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div>
    <h3>Add Keg</h3>
    <input placeholder="Brew Name" #newName>
    <input placeholder="Brewery" #newBrewery>
    <button (click)="addKeg(newName)">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userKegName: HTMLInputElement){
    this.onSubmitNewKeg.emit(userKegName.value);
    userKegName.value = "";
  }
}
