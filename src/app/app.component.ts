import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodosStore} from "./store/todos.store";
import {JsonPipe} from "@angular/common";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, TodoListComponent, MatProgressSpinner],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  store = inject(TodosStore);

  ngOnInit(): void {
    this.loadTodos()
      .then(()=> console.log("todos loaded"));
  }

  async loadTodos(){
    await this.store.loadAll();
  }

}
