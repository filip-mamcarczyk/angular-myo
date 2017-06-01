import { Injectable } from '@angular/core';

@Injectable()
export class PhotosService {

  private photos: string[] = [
    "../../assets/imgs/1.JPG",
    "../../assets/imgs/2.JPG",
    "../../assets/imgs/3.JPG",
    "../../assets/imgs/4.JPG",
    "../../assets/imgs/5.JPG",
    "../../assets/imgs/6.JPG",
    "../../assets/imgs/7.JPG",
    "../../assets/imgs/8.JPG",
    "../../assets/imgs/9.JPG"
  ];

  constructor() { }

  public getPhotosUrls(): string[] {
    return this.photos;
  }

}
