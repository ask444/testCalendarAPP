import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventSesrvice } from './event.service';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FullCalendarModule,
    AppRoutingModule
  ],
  providers: [EventSesrvice],
  bootstrap: [AppComponent]
})
export class AppModule { }
