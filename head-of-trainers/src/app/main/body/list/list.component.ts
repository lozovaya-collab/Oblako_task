import { Component, OnInit } from '@angular/core';


export interface Course {
  date: string;
  name: string;
  number: number;
  trainer: string;
  progress: string;
  status: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  coursesAll: Course[] = [

    {
      date: "23 дек, 9:00",
      name: "Страхование с заботой о клиенте",
      number: 12,
      trainer: "",
      progress: "95 %",
      status: "slot_active"
    },
    {
      date: "14 ноя, 9:30",
      name: "Главные правила продаж",
      number: 10,
      trainer: "",
      progress: "91 %",
      status: "slot_active"
    },
    {
      date: "19 окт, 14:30",
      name: "Первичное обучение КС",
      number: 8,
      trainer: "",
      progress: "86 %",
      status: "slot_active"
    },
    {
      date: "10 окт, 16:00",
      name: "Вторичное обучение КС",
      number: 18,
      trainer: "",
      progress: "82 %",
      status: "slot_active"
    },
    {
      date: "5 окт, 15:00",
      name: "Вклады: теория и практика",
      number: 6,
      trainer: "",
      progress: "79 %",
      status: "slot_inactive"
    },
    {
      date: "27 сен, 11:00",
      name: "Очное обучение менеджеров",
      number: 20,
      trainer: "",
      progress: "73 %",
      status: "slot_inactive"
    }
  ]

}
