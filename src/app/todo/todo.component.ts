import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IgxListModule } from 'igniteui-angular';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, IgxListModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todoList = [];
  }
}
