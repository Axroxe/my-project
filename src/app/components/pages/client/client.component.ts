import { Component, OnInit } from '@angular/core';
import {PruebaService} from '../../../services/prueba.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.sass']
})
export class ClientComponent implements OnInit {

  constructor(
    public pruebaService: PruebaService
  ) { }

  ngOnInit() {
    this.pruebaService.prueba2 = JSON.parse(localStorage.getItem("prueba"));
    console.log(this.pruebaService.prueba2);
    this.prueba();
  }

  prueba(){
    // this.pruebaService.prueba = 'Texto desde el cliente';
  }

}
