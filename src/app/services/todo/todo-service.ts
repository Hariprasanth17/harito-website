import { Injectable, signal } from '@angular/core';

interface TodoList {
  title: string
  id: string
  isCompleted: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList = signal<TodoList[]>([]);

  generateID(): string {
    return crypto.randomUUID();
  }

  addTodoItem(todoItem: TodoList) {
    this.todoList.update((prev) => [todoItem, ...prev])
  }

  getTodoList() {
    return this.todoList
  }

  removeTodoItem(id: string) {
    this.todoList.update((prev) => prev.filter(item => item.id !== id))
  }

  toggleTodoItem(id: string) {
    this.todoList.update(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }
}
