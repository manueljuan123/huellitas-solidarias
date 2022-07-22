/* MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';

/* COMPONENTS */
import { PublicComponent } from './public.component';
import { CarouselComponent } from './home/components/carousel/carousel.component';
import { HeaderComponent } from './home/components/header/header.component';
import { AboutUsComponent } from './home/components/about-us/about-us.component';
import { OurEventsComponent } from './home/components/our-events/our-events.component';
import { AchievementsComponent } from './home/components/achievements/achievements.component';
import { SocialMediaComponent } from './home/components/social-media/social-media.component';
import { OurHistoryComponent } from './about-us/components/our-history/our-history.component';

/* CONTAINERS */
import { HomeComponent } from './home/container/home/home.component';
import { AboutUsComponentContainer } from './about-us/container/about-us/about-us-container.component'



@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    CarouselComponent,
    HeaderComponent,
    AboutUsComponent,
    OurEventsComponent,
    AchievementsComponent,
    SocialMediaComponent,
    OurHistoryComponent,
    AboutUsComponentContainer
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
