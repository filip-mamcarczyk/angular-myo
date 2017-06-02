
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


   get gesture$() {
      return Observable.merge(
        this.swipeLeft$,
        this.swipeRight$,
        this.spread$,
        this.fist$
      )
   }

  get fist$() {
    return Observable.fromEvent(this.armband, "fist").map(() => "fist");
  }

  get spread$() {
    return Observable.fromEvent(this.armband, "fingers_spread").map(() => "fingers_spread");
  }

  get swipeLeft$() {
    return Observable.fromEvent(this.armband, "wave_in").map(() => "wave_in");
  }

  get swipeRight$() {
    return Observable.fromEvent(this.armband, "wave_out").map(() => "wave_out");
  }

  fromEvent(event) {
        return Observable.fromEvent(this.armband, event);
    }
}
