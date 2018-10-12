import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  // variables
  title = 'Angular To do';
  pageTitle: string = "Task Dashboard"

  tasks: Task[] = [
    {
      id: 1,
      name: "Buy coffee",
      priority: 1,
      complete: "",
    },
    {
      id: 2,
      name: "Work on project",
      priority: 2,
      complete: "",
    }
  ]
}
