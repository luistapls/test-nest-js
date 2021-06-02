import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async createTask(task: CreateTaskDto): Promise<any> {
    const newTask = new this.taskModel(task);

    return await newTask.save();
  }

  async readTasks(): Promise<any> {
    return await this.taskModel.find();
  }

  async readTask(id: string): Promise<any> {
    return await this.taskModel.findById(id);
  }

  async updateTask(task: CreateTaskDto, id: string): Promise<any> {
    return await this.taskModel.findByIdAndUpdate(id, task);
  }

  // async readTask(id: string): Promise<any> {
  //   return await this.taskModel.findById(id);
  // }
}
