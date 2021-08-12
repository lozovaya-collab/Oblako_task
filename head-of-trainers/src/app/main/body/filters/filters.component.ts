import { Component, OnInit } from '@angular/core';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter} from '@angular/material/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';



import * as _moment from 'moment';
import { Moment} from 'moment';
const moment =  _moment;

const monthsList = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
]
interface Status {
  value: string;
}

interface Program {
  value: string;
}


export const MY_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
}
};
export class AppDateAdapter extends NativeDateAdapter {

  format(date: Date, displayFormat: Object): string {

      if (displayFormat === 'input') {

          const month = date.getMonth();
          const year = date.getFullYear();

          return `${monthsList[month]} ${year}`;
      }

      return date.toDateString();
  }
}
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'}
  ],
})
export class FiltersComponent  {

  statusControl = new FormControl('', Validators.required);
  programControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  statusAll: Status[] = [
    {value: 'Статус 1'},
    {value: 'Статус 2'},
    {value: 'Статус 3'},
  ];

  programmeAll: Status[] = [
    {value: 'Программа 1'},
    {value: 'Программа 2'},
    {value: 'Программа 3'},
  ];

}
