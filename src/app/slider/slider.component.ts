import { Component, OnInit } from '@angular/core';
import {ArmbandService} from "../services/armband";
import {PhotosService, Photo} from "../services/photos.service";
import {trigger, state, style, transition, animate} from "@angular/animations";
import {Subject} from "rxjs";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger("selectActivePhoto", [
      state("inactive", style({
        transform: "scale(1)"
      })),
      state("active", style({
        transform: "scale(3)"
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class SliderComponent implements OnInit {

  public text: string = "Welcome!";

  public photos: Photo[] = [];

  public activePhoto: Photo;
  public animating: boolean = false;

  public animationStart$: Subject<any> = new Subject();
  public animationDone$: Subject<any> = new Subject();

  constructor(private armband: ArmbandService, private photosService: PhotosService) { }

  ngOnInit() {
    this.armband.fist$.subscribe(() => this.text = 'fist!');
    this.armband.spread$.subscribe(() => this.text = 'spread!');


    this.armband.gesture$
      .filter(() => !this.animating)
      // .takeUntil(this.animationStart$)
      // .repeatWhen(() => this.animationDone$)
      .subscribe(g => this.react(g));

    this.photos = this.photosService.getAllPhotos();
    this.select(this.photos[0]);
  }

  public react(gesture: any): void {
      switch (gesture) {
        case "wave_in":
          this.swipeLeft();
          break;
        case "wave_out":
          this.swipeRight();
          break;
      }
  }

  private swipeRight(): void {
    console.log('r')
    let index: number = this.activePhoto.index + 1;
    if (index === this.photos.length) {
      index = 0;
    }
    this.select(this.photos[index]);
  }

  private swipeLeft(): void {
    let index: number = this.activePhoto.index - 1;
    if (index < 0) {
      index = this.photos.length - 1;
    }
    this.select(this.photos[index]);
  }

  public select(photo: Photo) {
    if (this.activePhoto) {
      this.activePhoto.state = "inactive";
    }
    this.activePhoto = photo;
    photo.state = "active";
  }

}
