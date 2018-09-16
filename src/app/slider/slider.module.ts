import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { CarouselModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule, CarouselModule
  ],
  declarations: [SliderComponent],
exports: [SliderComponent]
})
export class SliderModule {}
