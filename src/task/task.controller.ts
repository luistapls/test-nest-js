import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('/api/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/create')
  createTask(@Body() task: CreateTaskDto): Promise<any> {
    return this.taskService.createTask(task);
  }

  @Get('/read')
  readTasks(): Promise<any> {
    return this.taskService.readTasks();
  }

  @Get('/read/:id')
  readTask(@Param('id') id: string): Promise<any> {
    return this.taskService.readTask(id);
  }

  @Put('/update/:id')
  updateTask(
    @Body() task: CreateTaskDto,
    @Param('id') id: string,
  ): Promise<any> {
    return this.taskService.updateTask(task, id);
  }

  // @Get('/read/:id')
  // readTask(@Param('id') id: string): Promise<any> {
  //   return this.taskService.readTask(id);
  // }
}
