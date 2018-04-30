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
import { LocDetailsComponent } from './loc-details/loc-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { MostRecentPipe } from './most-recent.pipe';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing/app-routing.module";


@NgModule({
  declarations: [
    HomeListComponent,
    StaticComponent,
    AboutComponent,
    HomePageComponent,
    HeaderComponent,
    SidebarComponent,
    LineBreaksPipe,
    RatingComponent,
    LocDetailsComponent,
    DetailsPageComponent,
    MostRecentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [StaticComponent]
})
export class AppModule { }
