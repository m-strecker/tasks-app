import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent  implements OnInit {

  form!:FormGroup;
  time!: FormControl;
  subscription!: Subscription;

  constructor(private service: TaskService, private router: Router ) {
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      date: new FormControl(),
      time: new FormControl(),
      priority_level: new FormControl(),
      category: new FormControl(),
      progress_level: new FormControl(),
    });
    this.time = new FormControl(); // Initialize the time FormControl
   }


   add_task() {
    let x = <Task>this.form.value;
    x.date =x.date.slice(0,10); //new edit - ion-datetime has different format so will slice the first 10 characters
    x.time = x.date + ' ' + this.time.value;
    this.subscription = this.service.addTask(x).subscribe({
      next: (result: any) => {
        console.log(result.task.title + ' has been added successfully');
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });
    this.form.reset();
    this.router.navigate(['tabs/tab1']);   //new edit - navigation to home page is done with a different path
   
  }

  ngOnDestroy() {
    // Unsubscribe from the subscription to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  ngOnInit() {}

}
