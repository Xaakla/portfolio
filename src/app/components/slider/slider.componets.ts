import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() slides: {
    _id: string,
    title: string;
    summary: string,
    description: string,
    source_code: string,
    image: string,
    text?: string,
    color?: string }[];
}
