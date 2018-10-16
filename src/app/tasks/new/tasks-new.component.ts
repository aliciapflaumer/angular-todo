import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'tasks-new',
  templateUrl: './tasks-new.component.html',
  styleUrls: ['./tasks-new.component.css']
})
export class TasksNewComponent {
  task = new Task;
}
