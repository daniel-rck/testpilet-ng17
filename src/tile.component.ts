import { Component, Inject, VERSION } from '@angular/core';
import { PiletApi } from 'sample-piral';

@Component({
  template: `
    <div class="teaser">
      <h3>Counter: {{ counter }}</h3>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <small>Angular {{ version }}</small>
    </div>
  `,
})
export class TileComponent {
  public counter = 0;
  public version = VERSION.full;

  constructor(@Inject('piral') piral: PiletApi) {
    console.log('Tile rendered', piral.meta);
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}
