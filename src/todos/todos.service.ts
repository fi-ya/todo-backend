import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ITodo } from './interfaces/todo.interface';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<ITodo[]> {
    const savedTodos = await this.todoRepository.find();

    console.log('All todos from the db: ', savedTodos);
    return savedTodos;
  }

  async findOne(id: number): Promise<Todo> {
    if (!id) return null;
    const todo = await this.todoRepository.findOneOrFail({ where: { id } });

    console.log('Find Todo: ', todo);
    return todo;
  }

  async create(iTodo: ITodo): Promise<ITodo> {
    const todo = new Todo();
    todo.id = iTodo.id;
    todo.description = iTodo.description;
    todo.isCompleted = iTodo.isCompleted;
    const newTodo = await this.todoRepository.save(todo);

    console.log('Create new todo: ', newTodo);
    return newTodo;
  }

  async delete(id: number): Promise<ITodo> {
    const todoToDelete = await this.todoRepository.findOneOrFail({
      where: { id },
    });
    const deleteTodo = await this.todoRepository.remove(todoToDelete);
    console.log('Deleted todo: ', deleteTodo);
    return deleteTodo;
  }

  async update(id: number, iTodo: ITodo): Promise<ITodo> {
    const todoToUpdate = await this.todoRepository.findOneOrFail({
      where: { id },
    });

    if (!todoToUpdate) {
      throw new NotFoundException('Todo not found');
    }

    todoToUpdate.description = iTodo.description;
    todoToUpdate.isCompleted = iTodo.isCompleted;

    const updatedTodo = await this.todoRepository.save(todoToUpdate);

    console.log('Updated todo: ', updatedTodo);
    return updatedTodo;
  }
}
