import { Injectable } from '@angular/core';

@Injectable()
export class PhotosService {

  private photos: Photo[] = [
    new Photo("1"),
    new Photo("2"),
    new Photo("3"),
    new Photo("4"),
    new Photo("5"),
    new Photo("6"),
    new Photo("7"),
    new Photo("8"),
    new Photo("9")
  ];

  constructor() { }

  public getPhotos(): Photo[] {
    return this.photos;
  }

}

export class Photo {

  public url;

  constructor(id: string) {
    this.url =`../../assets/imgs/${id}.jpg`;
  }
}
