import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:any;
  email:any;
  password:any;
  address:any;
  number:any;
  admin:any;

  constructor(private router: Router,private auth: AuthService) { }

  ngOnInit() {
  }

  register(){
    var registerObj = new Object();
    registerObj['name'] = this.name;
    registerObj['email'] =this.email;
    registerObj['password'] =this.password;
    registerObj['address'] =this.address;
    registerObj['number'] =this.number;
    registerObj['admin'] =this.admin;

    // console.log('Register Object', registerObj);
    this.auth.registerUser(registerObj)
    // .subscribe(data => {
    //   console.log('hello',data);
    //   if(data.success){
        this.router.navigate(['tasks']);
    //   }
    // });
  
  }

  login(){
    this.router.navigate(['login'])
  }

}
