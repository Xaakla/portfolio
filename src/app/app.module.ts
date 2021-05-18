import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbCarousel, NgbCarouselModule, NgbModule, NgbRating} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { SliderComponent } from './components/slider/slider.componets';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ButtonComponent,
    SliderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule,  NgbCarouselModule],
  providers: [ NgbCarousel, NgbRating ],
  bootstrap: [AppComponent],
})
export class AppModule {}
