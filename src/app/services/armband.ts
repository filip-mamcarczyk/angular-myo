
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import Myo from 'myo';

@Injectable()
export class ArmbandService {

    armband = Myo;

    constructor () {
        this.armband.on('connected', function () {
            this.vibrate();
            this.streamEMG();
        });
        this.armband.onError = error => console.log(error);
        this.armband.connect('org.neurojs.myo');
    }

  get fist$() {
    return Observable.fromEvent(this.armband, "fist");
  }

  get spread$() {
    return Observable.fromEvent(this.armband, "fingers_spread");
  }

  get swipeLeft$() {
    return Observable.fromEvent(this.armband, "wave_in");
  }

  get swipeRight$() {
    return Observable.fromEvent(this.armband, "wave_out");
  }
  fromEvent(event) {
        return Observable.fromEvent(this.armband, event);
    }
}
