import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { RouterModule } from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LoginComponent} from './login/login.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
  ],
  entryComponents: [
    LoginComponent,
  ],
  providers: [],
})
export class ModalModule { }
