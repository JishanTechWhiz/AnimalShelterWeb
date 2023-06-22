import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurImpactComponent } from './our-impact/our-impact.component';
import { DonetionComponent } from './donetion/donetion.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurImpactComponent,
    DonetionComponent,
    AdoptionComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
