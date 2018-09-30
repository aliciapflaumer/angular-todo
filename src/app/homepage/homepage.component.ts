import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
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
