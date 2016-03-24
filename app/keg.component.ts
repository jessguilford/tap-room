import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  template: `
    <h3>{{ keg.description }}</h3>
  `
})
export class KegComponent {
  public keg: Keg;
}
