import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskServiceService} from '../task-service.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {

  /**
   *
   */
  
  constructor(private taskService: TaskServiceService) {
    // ...
  }
onaddtask(taskform: NgForm){
  if(taskform.invalid===true){
    alert('Please check the form validity');
    return;
  }
this.taskService.addTask_service(taskform.value.txtTaskName,taskform.value.txtTaskDesctiption,taskform.value.txtTaskStatus)
alert(taskform.value.txtTaskName+"\n"+taskform.value.txtTaskDesctiption+"\n"+taskform.value.txtTaskStatus);
}
}
