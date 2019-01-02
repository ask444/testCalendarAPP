import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventSesrvice } from './event.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FullCalendarModule,
    AppRoutingModule
  ],
  providers: [EventSesrvice],
  bootstrap: [AppComponent]
})
export class AppModule { }
