import { Component, OnInit } from '@angular/core';
import { CONST_LOGIN_PAGE } from '@data/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public data = CONST_LOGIN_PAGE;

}
