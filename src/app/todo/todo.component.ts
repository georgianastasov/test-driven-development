import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxButtonDirective, IgxButtonModule, IgxIconModule, IgxInputGroupModule, IgxListModule } from 'igniteui-angular';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, IgxListModule, IgxInputGroupModule, IgxButtonModule, IgxButtonDirective, IgxIconModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoList: string[] = [];
  item: string = '';

  constructor() { }

  ngOnInit(): void {
    this.todoList = [];
  }

  addTodoItem(newItem: string): void {
    this.todoList.push(newItem);
    this.item = '';
  }

  deleteTodoItem(index: number): void {
    this.todoList.splice(index, 1);
  }

  selectTodoItem(index: number): void {
    this.item = this.todoList[index];
  }
}
