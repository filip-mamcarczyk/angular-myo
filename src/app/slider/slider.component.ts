import { Component, OnInit } from '@angular/core';
import {ArmbandService} from "../services/armband";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public text: string = "Welcome!"

  constructor(private armband: ArmbandService ) { }

  ngOnInit() {
    this.armband.fist$.subscribe(() => this.text = 'fist!');
    this.armband.spread$.subscribe(() => this.text = 'spread!');
    this.armband.swipeLeft$.subscribe(() => this.text = 'swipeLeft$');
    this.armband.swipeRight$.subscribe(() => this.text = 'swipeRight$!');
  }

}