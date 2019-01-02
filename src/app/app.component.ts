import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventSesrvice } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calendarOptions: Options;
  displayEvent: any;
  show: boolean = false;
  public saveUsername: boolean;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  language: string="en";
  constructor(protected eventService: EventSesrvice) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        locale: this.language,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month'
        },
        events: data
      };
    });
  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    this.show = true;
    model = {
      event: {
        // id: model.event.id,
        // start: model.event.start,
        // end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
  public onSaveUsernameChanged(value: boolean) {
    debugger;
    this.saveUsername = value;
    if (this.saveUsername == true) {
      this.language = "ar";
    }
  }

}
