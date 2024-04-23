import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { By } from '@angular/platform-browser';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an empty todo list', () => {
    expect(component.todoList).toEqual([]);
  });

  it('should add a new ToDo item', () => {
    const newItem = 'New Task';
    component.addTodoItem(newItem);
    expect(component.todoList).toContain(newItem);
  });

  it('should bind input field with newItem property', () => {
    const inputField = fixture.debugElement.query(
      By.css('input')
    ).nativeElement;
    const newItem = 'New Task';

    inputField.value = newItem;
    inputField.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.newItem).toEqual(newItem);
  });
});
