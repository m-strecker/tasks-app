import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent  implements OnInit {

  tasks : Task[] = []; //initialize task array
  constructor( private service: TaskService) { }

  ngOnInit() {

    const tasksObservable: Observable<Task[]> = this.service.getTasks() as Observable<Task[]>;
    tasksObservable.subscribe((response: Task[]) => {  
    this.tasks = response;
   
    });
  }

}
