import { Component } from '@angular/core';
import { CONST_LOGIN_PAGE } from '@data/constants';

@Component({
  selector: 'app-login-form, [app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public data = CONST_LOGIN_PAGE;

  public loginForm;

  constructor() {
    this.loginForm = this.data.FORM;
  }

  get isValidForm(){
    return (this.loginForm.email.isValid() && this.loginForm.password.isValid())
  }

  authenticate(){
    console.log('Authenticate');
  }

}
