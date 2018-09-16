import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    'identifiant': new FormControl(),
    'password': new FormControl()
  });
user: User;
errorMessage: String;
  constructor(private fb: FormBuilder, private service: UserService, private cookieService: CookieService, private router: Router) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
  this.loginForm = this.fb.group({
      identifiant: [null , [Validators.required, Validators.minLength(1)]],
      password: [null , [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.user = new User (null, null, null, null, this.loginForm.get('identifiant').value, null,
    this.loginForm.get('password').value, null, null, null, null);
/*
    const logedUser = this.service.logUser(this.user);
    if (logedUser != null) {
      console.log('name' + this.user);
      this.cookieService.set('token', logedUser.token);
      this.cookieService.set('user', JSON.stringify(logedUser));
     const user: User = JSON.parse(this.cookieService.get('user'));
    } else {
        this.errorMessage = 'Identifiant ou Mot de passe ne corresponde pas reéssayez S.V.P !!!!';
    } */

    this.service.logUser(this.user)
      .subscribe((logedUser: User) => {
        this.user = logedUser;
          if (this.user != null) {
            console.log('name' + this.user);
            this.cookieService.set('token', logedUser.token);
            this.cookieService.set('user', JSON.stringify(logedUser));
            window.location.href = '/home'; }
          }, err => this.errorMessage = 'Identifiant ou Mot de passe incorret !');

  }

  get identifiant() {
    return this.loginForm.get('identifiant');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
