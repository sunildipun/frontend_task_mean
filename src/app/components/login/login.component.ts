import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormControl} from '@angular/forms';
import { AuthService } from '../../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;

  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit() {
  }

  login(){
    var loginObject = new Object();
    loginObject['email'] = this.email;
    loginObject['password']= this.password;

    console.log('LoginObject', loginObject);
    this.auth.getUserDetail(loginObject);
    this.router.navigate(['tasks'])
  }

  register(){
    this.router.navigate(['register'])
  }
}
