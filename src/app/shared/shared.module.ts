import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbCarousel, NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [NgbCarousel],
  exports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbCarouselModule,
    NgbModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
