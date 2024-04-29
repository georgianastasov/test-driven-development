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
    fixture.detectChanges();

    component.addTodoItem(newItem);
    fixture.detectChanges();

    expect(component.todoList).toContain(newItem);
  });

  it('should bind input field with newItem property', () => {
    const inputField = fixture.debugElement.query(
      By.css('input')
    ).nativeElement;
    const newItem = 'New Task';
    fixture.detectChanges();

    inputField.value = newItem;
    inputField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.item).toEqual(newItem);
  });

  it('should display correct index for each ToDo item', () => {
    component.todoList = ['Task 1', 'Task 2', 'Task 3'];
    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('igx-list-item'));
    fixture.detectChanges();

    listItems.forEach((item, index) => {
      const textContent = item.nativeElement.textContent.trim();
      expect(textContent).toContain(`${index + 1} - Task ${index + 1}`);
    });
  });

  it('should clear newItem after adding a ToDo item', () => {
    component.item = 'New Task';
    fixture.detectChanges();

    component.addTodoItem(component.item);
    fixture.detectChanges();

    expect(component.item).toEqual('');
  });

  it('should delete a ToDo item', () => {
    component.todoList = ['Task 1', 'Task 2', 'Task 3'];
    fixture.detectChanges();

    component.deleteTodoItem(0);
    fixture.detectChanges();

    expect(component.todoList.length).toEqual(2);
    expect(component.todoList).not.toContain('Task 1');
  });

  it('should populate input field when item is selected', () => {
    component.todoList = ['Task 1', 'Task 2', 'Task 3'];
    fixture.detectChanges();

    const selectedItemIndex = 0;
    const selectedItem = component.todoList[selectedItemIndex];
    fixture.detectChanges();

    component.selectTodoItem(selectedItemIndex);
    fixture.detectChanges();

    expect(component.item).toEqual(selectedItem);
  });

  it('should update todo list when item is edited', () => {
    const editedItemIndex = 0;
    const editedValue = 'Edited Task';
    fixture.detectChanges();

    component.todoList = ['Task 1', 'Task 2', 'Task 3'];
    component.editIndex = editedItemIndex;
    fixture.detectChanges();

    component.editTodoItem(editedValue);
    fixture.detectChanges();

    expect(component.todoList[editedItemIndex]).toEqual(editedValue);
  });

  it('should set editing flag to true when "Edit Item" button is clicked', () => {
    const itemIndex = 0;
    component.editing = false;
    fixture.detectChanges();

    component.selectTodoItem(itemIndex);
    fixture.detectChanges();

    expect(component.editing).toBeTrue();
  });
});
