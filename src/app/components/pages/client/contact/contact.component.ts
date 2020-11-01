import { Component, OnInit } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {LoginComponent} from '../../../shared/modal/login/login.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  prueba: any;
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "date": "2020-04-03 20:03:50"
    },
    {
      "name": "Mcleod  Mueller",
      "date": "2020-05-03 20:03:50"
    },
    {
      "name": "Day  Meyers",
      "date": "2019-01-03 20:03:50"
    },
    {
      "name": "Aguirre  Ellis",
      "date": "2020-04-03 20:03:50"
    },
    {
      "name": "Mcleod  Mueller",
      "date": "2020-04-03 20:03:50"
    },
    {
      "name": "Day  Meyers",
      "date": "2020-04-03 20:03:50"
    },
    {
      "name": "Aguirre  Ellis",
      "date": "2020-04-03 20:03:50"
    },
    {
      "name": "Mcleod  Mueller",
      "date": "2020-04-03 20:03:50"
    },
    {
      "name": "Day  Meyers",
      "date": "2020-04-03 20:03:50"
    },
    {
      "name": "Aguirre  Ellis",
      "date": "2020-04-03 20:03:50"
    },
    {
      "name": "Cook  Tyson",
      "date": "2020-04-03 20:03:50"
    }
  ];

  p: number = 1;

  constructor(
    private modalService: NzModalService,
  ) { }

  ngOnInit() {
  }

  showModal(): void{
    const modal = this.modalService.create({
      nzTitle: 'Modal de prueba',
      nzContent: LoginComponent,
      nzFooter: null
    });
  }

}
