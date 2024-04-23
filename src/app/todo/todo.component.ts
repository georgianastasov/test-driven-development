import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxButtonDirective, IgxButtonModule, IgxInputGroupModule, IgxListModule } from 'igniteui-angular';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, IgxListModule, IgxInputGroupModule, IgxButtonModule, IgxButtonDirective],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todoList = [];
  }

  addTodoItem(newItem: string): void {
    this.todoList.push(newItem);
  }
}
