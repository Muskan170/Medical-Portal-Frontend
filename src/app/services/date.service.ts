import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  month: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor() { }

  getDate(dateInput: string) {
    const date = new Date(dateInput);
    return [
      [date.getDate(), this.month[date.getMonth()]].join(' '),
      date.getFullYear(),
    ].join(', ');
  }
}
