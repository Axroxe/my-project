import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {LoadGuard} from '../../../../guard/load.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoadGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
