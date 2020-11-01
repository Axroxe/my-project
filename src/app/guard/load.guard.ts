import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServices } from '../services/auth.service';
import {PruebaService} from '../services/prueba.service';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard  implements CanActivate {

  constructor(
    public pruebaService: PruebaService,
    private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.pruebaService.prueba2 = JSON.parse(localStorage.getItem("prueba"));
      if(this.pruebaService.prueba2){

        if(this.pruebaService.prueba2['profile'] == 'Cliente')this.router.navigate(['/contact']);
        return false;
      }
      console.log(this.pruebaService.prueba2);
      return true;
  }
}
