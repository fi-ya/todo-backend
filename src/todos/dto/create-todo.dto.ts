import { IsString, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly description: string;

  @IsBoolean()
  readonly isCompleted: boolean;
}
