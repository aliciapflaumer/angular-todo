import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Task } from './task';
// import { TasksNewComponent } from './new/tasks-new.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [ TaskService ]
})
export class TasksComponent implements OnInit {
  // variables
  title = 'Angular To do';
  pageTitle: string = "Task Dashboard";
  tasks: Task[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit() {
    // checks for data changes
    // 0 starts right away, 5000 is how many seconds in between calls
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getTasks());
  }

  getTasks() {
    this.taskService.getTasks()
        .subscribe(
          tasks => this.tasks = tasks,
          error => this.errorMessage = <any>error
        );
  }
}
