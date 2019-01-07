import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventSesrvice } from '../event.service';

declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class HomeComponent {
  calendarOptions: Options;
  displayEvent: any;
  show: boolean = false;
  defaultShow: boolean = true;

  public saveUsername: any = "EN";
  items: any[] = ["EN", "AR"]

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  language: string = "en";
  constructor(protected eventService: EventSesrvice) { }

  ngOnInit() {



    $(function() {
      $('#datetimepicker12').datetimepicker({
        locale: 'ar',
        inline: true,
        sideBySide: true,
        format: 'L'
      });
      $('#datetimepicker13').datetimepicker({
        locale: 'en',
        inline: true,
        sideBySide: true,
        format: 'L'
      });
    });


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
        events: data,
        fixedWeekCount: false,
        showNonCurrentDates: false
      };
    });
  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    this.show = true;
    this.defaultShow = false;
    model = {
      event: {
        id: model.event.id,
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
      // duration: {
      //   _data: model.duration._data
      // }
    }
    this.displayEvent = model;
  }
  public ChangeValue(value: any) {
    debugger;
    this.saveUsername = value;
    if (value == "AR") {
      this.language = "AR";
      this.ucCalendar.fullCalendar('option', {
        locale: 'ar',
        isRTL: true
      });
    }
    else {
      this.language = "EN";
      this.ucCalendar.fullCalendar('option', {
        locale: this.language,
        isRTL: false
      });
    }
  }

}
