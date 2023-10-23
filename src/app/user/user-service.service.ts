import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  private http: HttpClient ;
  constructor(http: HttpClient) {
    this.http = http;
  }
  addTask_service(name: string, surname:String, username:string,email:string, password:string){
    this.http.post('https://localhost:8000/register',{
      name: name,
      surname: surname,
      emailAddress: username,
      username: email,
      password: password
    }).subscribe(data =>{console.log(data)});
  }
}
