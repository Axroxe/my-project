import { Component, OnInit } from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private modal: NzModalRef
  ) { }

  ngOnInit() {

  }

  prueba(){
    alert();
  }

  cancelar(){
    this.modal.destroy();
  }

}
