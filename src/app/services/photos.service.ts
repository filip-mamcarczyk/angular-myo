import { Injectable } from '@angular/core';

@Injectable()
export class PhotosService {

  private photos: string[] = [
    "../../assets/imgs/1.jpg",
    "../../assets/imgs/2.jpg",
    "../../assets/imgs/3.jpg",
    "../../assets/imgs/4.jpg",
    "../../assets/imgs/5.jpg",
    "../../assets/imgs/6.jpg",
    "../../assets/imgs/7.jpg",
    "../../assets/imgs/8.jpg",
    "../../assets/imgs/9.jpg"
  ];

  constructor() { }

  public getPhotosUrls(): string[] {
    return this.photos;
  }

}
