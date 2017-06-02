import { Injectable } from '@angular/core';

@Injectable()
export class PhotosService {

  private photos: Photo[] = [
    new Photo(0),
    new Photo(1),
    new Photo(2),
    new Photo(3),
    new Photo(4),
    new Photo(5),
    new Photo(6),
    new Photo(7),
    new Photo(8)
  ];

  constructor() { }

  public getAllPhotos(): Photo[] {
    return this.photos;
  }

  public getPhoto(index: number): Photo {
    return this.photos[index]
  }
}

export class Photo {

  public url: string;

  public state: "active" | "inactive" = "inactive";

  constructor(public index: number) {
    this.url =`../../assets/imgs/${index + 1}.jpg`;
  }
}
