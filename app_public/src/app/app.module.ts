import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeListComponent } from './home-list/home-list.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { StaticComponent } from './static/static.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LineBreaksPipe } from './line-breaks.pipe';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    HomeListComponent,
    StaticComponent,
    AboutComponent,
    HomePageComponent,
    HeaderComponent,
    SidebarComponent,
    LineBreaksPipe,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [StaticComponent]
})
export class AppModule { }
