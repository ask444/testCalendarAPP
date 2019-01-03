import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs';
import { of } from 'rxjs';
var currency_symbols = {
    'USD': '$', // US Dollar
    'EUR': '€', // Euro
    'GBP': '£', // British Pound Sterling
    'ILS': '₪', // Israeli New Sheqel
    'INR': '₹', // Indian Rupee
    'JPY': '¥', // Japanese Yen
    'KRW': '₩', // South Korean Won
    'NGN': '₦', // Nigerian Naira
    'PHP': '₱', // Philippine Peso
    'PLN': 'zł', // Polish Zloty
    'PYG': '₲', // Paraguayan Guarani
    'THB': '฿', // Thai Baht
    'UAH': '₴', // Ukrainian Hryvnia
    'VND': '₫', // Vietnamese Dong
};
@Injectable()
export class EventSesrvice {
    public getEvents(): Observable<any> {
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        let data: any = [{
            id: 1,
            title: currency_symbols.INR + '2000',
            start: yearMonth,
            allDay: true
        },
        {
            id: 2,
            title: currency_symbols.INR+'3992',
            start: yearMonth + '-07',
            allDay: true
            // end: yearMonth + '-10'
        },
        {
            id: 3,
            title: currency_symbols.INR+'3995',
            start: yearMonth + '-08',
            allDay: true
            // end: yearMonth + '-10'
        },
        {
            id: 4,
            title: currency_symbols.INR+'3990',
            start: yearMonth + '-09',
            allDay: true
            // end: yearMonth + '-10'
        },
        // {
        //     id: 999,
        //     title: 'Repeating Event',
        //     start: yearMonth + '-09T16:00:00'
        // },
        // {
        //     id: 999,
        //     title: 'Repeating Event',
        //     start: yearMonth + '-16T16:00:00'
        // },
        {
            title: currency_symbols.INR+'2500',
            start: yearMonth + '-11',
            // end: yearMonth + '-13',
            allDay: true
        },
        // {
        //     title: 'Meeting',
        //     start: yearMonth + '-12T10:30:00',
        //     end: yearMonth + '-12T12:30:00'
        // },
        // {
        //     title: 'Lunch',
        //     start: yearMonth + '-12T12:00:00'
        // },
        // {
        //     title: 'Meeting',
        //     start: yearMonth + '-12T14:30:00'
        // },
        // {
        //     title: 'Happy Hour',
        //     start: yearMonth + '-12T17:30:00'
        // },
        // {
        //     title: 'Dinner',
        //     start: yearMonth + '-12T20:00:00'
        // },
        // {
        //     title: 'Birthday Party',
        //     start: yearMonth + '-13T07:00:00'
        // },
        {
            title: currency_symbols.INR+'3299',
            url: 'http://google.com/',
            start: yearMonth + '-28',
            allDay: true

        }];
        return of(data);
    }
};
