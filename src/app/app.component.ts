import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variables
  title = 'Angular To do';
  todos = [];

  addTodo(newTodoTask) {
    let newTodo = {
      task: newTodoTask,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.task !== todo.task );
  }

}
