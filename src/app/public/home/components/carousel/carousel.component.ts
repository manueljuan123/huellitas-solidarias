import { Component, Input, OnInit } from '@angular/core';
import { CarouselImages } from 'src/app/models/carousel-images';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {
  @Input() text : String = '';
  @Input() images: CarouselImages[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; /* Default to 3 seconds */

  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImages();
    }
  }

  // Change slide in every 6 seconds
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  // Sets index of image on indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length -1){
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
