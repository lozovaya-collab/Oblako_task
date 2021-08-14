import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../list.component';


@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  @Input() slot: Course = {
    date:  "23 дек, 9:00",
    name:  "Страхование с заботой о клиенте",
    number:  12,
    trainer:  "",
    progress:  "95 %",
    status: "slot_active"
  }



  ngOnInit(): void {
  }

}
