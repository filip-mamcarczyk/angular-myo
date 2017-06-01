import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArmbandSliderComponent } from './armband-slider/armband-slider.component';
import { ArmbandService } from './services/armband';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ArmbandSliderComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ArmbandService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
