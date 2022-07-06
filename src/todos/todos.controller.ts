import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  @Get()
  findAll(): string {
    return 'Get all todos';
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
