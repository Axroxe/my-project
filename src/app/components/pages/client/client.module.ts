import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ClientComponent} from './client.component';

import {ClientPageRoutingModule} from './client-routing.module';
import {LayoutModule} from '../../shared/layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientPageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,
    SharedModule
  ],
  declarations: [ClientComponent],
  exports: []
})
export class ClientPageModule {}
