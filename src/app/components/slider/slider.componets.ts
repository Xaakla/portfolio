import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import KeenSlider from 'keen-slider';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() slides: { text: string; color: string }[];
  @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement>;

  slider: any = null;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement);
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
