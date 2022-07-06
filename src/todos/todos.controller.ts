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
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodosController {

constructor(private readonly todoService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Todo ${id}`;
  }

  @Post()
  create(@Body() createTodoDto: CreateTodoDto): string {
    return `Todo: ${createTodoDto.description} Completed: ${createTodoDto.completed}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateTodoDto: CreateTodoDto, @Param('id') id): string {
    return `Update ${id} - Description: ${updateTodoDto.description}`;
  }
}
