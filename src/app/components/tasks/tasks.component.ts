import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  name:any;
  description:any;
  image:any;
  createdBy:any;
  assignedTo:any;

  show: boolean = false;



  constructor(private auth:AuthService) {
    this.auth.getTask();
   }

  ngOnInit() {
  }

  showAddTask(){
    this.show = true;
  }

  addTask(){
    this.show = false;
    var taskNew = new Object();
     
    taskNew['name']= this.name;
    taskNew['description']= this.description;
    taskNew['image']= this.image;
    taskNew['createdBy']= this.createdBy;
    taskNew['assignedTo']= this.assignedTo;

    console.log('New Task Object', taskNew);

    this.auth.addTask(taskNew);

  }
}

