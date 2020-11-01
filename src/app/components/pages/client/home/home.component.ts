import { Component, OnInit } from '@angular/core';
import {PruebaService} from '../../../../services/prueba.service';
import {person} from '../../../../models/person';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  selectedValue: any;
  prueba2: person = {
    nombre: null,
    apellido: null,
    profile: null
  }

  redirect: string;

  constructor(
    public pruebaService: PruebaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.redirect = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.prueba2 = JSON.parse(localStorage.getItem("prueba"));
  }

  prueba(){
    this.pruebaService.prueba = this.selectedValue;
  }

  form(){
    if(this.prueba2.nombre != null){
      this.pruebaService.prueba2 = this.prueba2;
      localStorage.setItem('prueba',JSON.stringify(this.prueba2));

      this.pruebaService.state = true;
      this.router.navigate([this.redirect]);

    }else{
      console.log('Valores nulos');
    }

  }
}
