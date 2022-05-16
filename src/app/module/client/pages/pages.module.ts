import { AppRoutingModule } from './../../../app-routing.module';
import { SliderComponent } from './component/slider/slider.component';
import { CoreModule } from './../core/core.module';
import { PagesRoutingComponent } from './pages-routing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import { DetailsComponent } from './details/details.component';
import { FilmesComponent } from './filmes/filmes.component';


@NgModule({
  declarations: [
    PagesRoutingComponent,
    HomeComponent,
    SliderComponent,
    DetailsComponent,
    FilmesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    SwiperModule,

  ]
})
export class PagesModule { }
