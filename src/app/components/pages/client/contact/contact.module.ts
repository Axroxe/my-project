import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {LayoutModule} from '../../../shared/layout/layout.module';
import {ContactComponent} from './contact.component';
import {ContactPageRoutingModule} from './contact-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import {NgxPaginationModule} from 'ngx-pagination';
import {FilterPipe} from '../../../../pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactPageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,
    NgxPaginationModule,
  ],
  declarations: [ContactComponent, FilterPipe],
  exports: []
})
export class ContactPageModule {}
