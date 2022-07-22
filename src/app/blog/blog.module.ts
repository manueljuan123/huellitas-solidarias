import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../core/shared/shared.module';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogComponent } from './blog.component';
import { SliderComponent } from './components/slider/slider.component';

import { InitContainerComponent } from './containers/init-container/init-container.component';


@NgModule({
  declarations: [
    BlogComponent,
    SliderComponent,
    InitContainerComponent

  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
