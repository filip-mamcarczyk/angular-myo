import { Component, OnInit } from '@angular/core';
import {ArmbandService} from "../services/armband";
import {PhotosService, Photo} from "../services/photos.service";
import {trigger, state, style, transition, animate} from "@angular/animations";

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
    ]),
    trigger("slideDownList", [
      state("visible", style({
        transform: "translateY(0px)"
      })),
      state("hidden", style({
        transform: "translateY(1000px)"
      })),
      transition('hidden => visible', animate('500ms ease-in')),
      transition('visible => hidden', animate('500ms ease-in'))
    ]),
    trigger("sharpenCover", [
      state("visible", style({
        filter: "blur(10px)"
      })),
      state("hidden", style({
        filter: "blur(0px)"
      })),
      transition('hidden => visible', animate('500ms ease-in')),
      transition('visible => hidden', animate('500ms ease-in'))
    ])
  ]
})
export class SliderComponent implements OnInit {

  public text: string = "Welcome!";

  public photos: Photo[] = [];

  public activePhoto: Photo;
  public animating: boolean = false;
  public listVisibility: "visible" | "hidden" = "visible";

  constructor(private armband: ArmbandService, private photosService: PhotosService) { }

  ngOnInit() {
    this.armband.fist$.subscribe(() => this.text = 'fist!');
    this.armband.spread$.subscribe(() => this.text = 'spread!');


    this.armband.gesture$
      .filter(() => !this.animating)
      .subscribe(g => this.react(g));

    this.photos = this.photosService.getAllPhotos();
    this.select(this.photos[0]);
  }

  public react(gesture: any): void {
    console.log(gesture)
      switch (gesture) {
        case "wave_in":
          this.swipeLeft();
          break;
        case "wave_out":
          this.swipeRight();
          break;
        case "fingers_spread":
          this.listVisibility = "hidden";
          break;
        case "fist":
          this.listVisibility = "visible";
          break;
      }
  }

  private swipeRight(): void {
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
