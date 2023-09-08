import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task';   //get model for task array

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent  implements OnInit {

@Input() task: Task = {} as Task;



  constructor() { }

  ngOnInit() {}

}
