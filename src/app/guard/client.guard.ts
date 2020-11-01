import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServices } from '../services/auth.service';
import {PruebaService} from '../services/prueba.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate{

  constructor(
    public pruebaService: PruebaService,
    private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this.pruebaService.prueba2 = JSON.parse(localStorage.getItem("prueba"));
        if(this.pruebaService.prueba2['profile'] == 'Cliente'){

          return true;
        }
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
        return false;
  }

}
