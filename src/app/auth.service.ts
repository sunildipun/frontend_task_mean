import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface registerResponse {
  success:boolean
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient) { }

  getUserDetail(loginObject){
    console.log('From auth service', loginObject);
    // return this.http.post('',{
    //   loginObject
    // })
  }

  registerUser(register){
    console.log(register);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post<registerResponse>('http://localhost:5000/user',
      register
  )
  }

  addTask(task){
    console.log(task);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('http://localhost:5000/tasks',task)
  }

  getTask(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.get('http://localhost:5000/tasks')
    .subscribe((response: any) => {
      console.log(response);
    })
  }
}
