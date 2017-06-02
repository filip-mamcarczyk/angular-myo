import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArmbandSliderComponent } from './armband-slider/armband-slider.component';
import { ArmbandService } from './services/armband';
import { SliderComponent } from './slider/slider.component';
import {PhotosService} from "./services/photos.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ArmbandSliderComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    ArmbandService,
    PhotosService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
