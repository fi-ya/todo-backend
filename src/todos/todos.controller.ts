import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import { ITodo } from './interfaces/todo.interface';
import { throws } from 'assert';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  findAll(): Promise<ITodo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<ITodo> {
    return this.todoService.findOne(parseInt(id));
  }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<ITodo> {
    return this.todoService.create(createTodoDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<ITodo> {
    return this.todoService.delete(parseInt(id));
  }

  @Put(':id')
  update(
    @Body() updateTodoDto: CreateTodoDto,
    @Param('id') id,
  ): Promise<ITodo> {
    return this.todoService.update(id, updateTodoDto);
  }
}
