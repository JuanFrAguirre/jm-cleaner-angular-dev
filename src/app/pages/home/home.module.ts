import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GetYoursComponent } from './components/get-yours/get-yours.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { VideoComponent } from './components/video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [HomeComponent, BannerComponent, AboutUsComponent, GetYoursComponent, TestimoniesComponent, VideoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    YouTubePlayerModule
  ]
})
export class HomeModule { }
