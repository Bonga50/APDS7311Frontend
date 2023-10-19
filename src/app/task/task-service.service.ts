import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private http: HttpClient ;
  constructor(http: HttpClient) {
    this.http = http;
  }
  addTask_service(taskName: string, taskDescription:String, taskStatus:string){
    this.http.post('https://localhost:8000/createtasks',{task: taskName,completed:true}).subscribe(data =>{console.log(data)});
  }
}
