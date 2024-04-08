import { Inject, Injectable, inject } from '@angular/core';
import { PiletApi } from 'sample-piral';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(@Inject('piral') private piral: PiletApi) {}

  public async showAlert() {
    const text = this.piral.translate('hello');
    alert(text);
  }
}
