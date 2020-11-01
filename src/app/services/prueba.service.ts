import { Injectable } from '@angular/core';
import {person} from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  prueba: any;
  prueba2: person;
  state: boolean = false;

  constructor() { }
}
