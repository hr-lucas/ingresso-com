import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  @ViewChild(SwiperComponent) swiper!: SwiperComponent;

  @Input() Slider: any;
  @Input() AddTitle: string | undefined;

  onSwiper([swiper] :any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  constructor() { }

  ngOnInit(): void {
    console.log('1',this.Slider)
  }



}
