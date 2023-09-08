import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { IonicModule } from '@ionic/angular';
import { AddTaskComponent } from './add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TaskComponent, TasksComponent, AddTaskComponent],
  imports: [CommonModule, IonicModule, ReactiveFormsModule], 
  exports: [TaskComponent, TasksComponent, AddTaskComponent]
})
export class ComponentsModule { }
