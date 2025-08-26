import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo/todo-service';

@Component({
  selector: 'app-todo',
  imports: [Navbar, MatIconModule, ReactiveFormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  todo = inject(TodoService)
  totoList = this.todo.getTodoList()
  task = new FormControl<string>('')

  addTodo() {
    if (!this.task.value) {
      return
    };
    const data = {
      title: this.task.value,
      id: this.todo.generateID(),
      isCompleted: false,
    }
    this.todo.addTodoItem(data)
    this.task.reset()
  }

}
