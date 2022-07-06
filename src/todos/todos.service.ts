import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [
    {
      id: '123456789',
      description: 'Buy shampoo',
      completed: false,
    },
    {
      id: '123455589',
      description: 'Buy conditioner',
      completed: false,
    },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: string): Todo {
    return this.todos.find(todo => todo.id === id);
  }
}
