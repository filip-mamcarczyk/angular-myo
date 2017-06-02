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
        transform: "scale(2)"
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class SliderComponent implements OnInit {

  public text: string = "Welcome!";

  public photos: Photo[] = [];

  public activePhoto: Photo = this.photosService.getPhoto(0);

  constructor(private armband: ArmbandService, private photosService: PhotosService) { }

  ngOnInit() {
    this.armband.fist$.subscribe(() => this.text = 'fist!');
    this.armband.spread$.subscribe(() => this.text = 'spread!');
    this.armband.swipeLeft$.subscribe(() => this.text = 'swipeLeft$');
    this.armband.swipeRight$.subscribe(() => this.text = 'swipeRight$!');

    this.photos = this.photosService.getAllPhotos();
  }

  public select(photo: Photo) {
    this.activePhoto.state = "inactive";
    this.activePhoto = photo;
    photo.state = "active";
  }

}
