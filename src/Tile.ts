import { Component, Inject, VERSION } from '@angular/core';

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
export class Tile {
  public counter = 0;
  public version = VERSION.full;

  constructor(@Inject('piral') piral: any) {
    console.log('Tile rendered', piral.meta);
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}
