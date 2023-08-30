import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid'

@Injectable()
export class TasksService {
    private tasks: Task[] = [{
        id: '1',
        title: 'primera tarea',
        description: 'some taks',
        status: TaskStatus.PENDING,
    }];

    getAllTasks() {
        return this.tasks;
    }
    createTasks(title: string, description: string) {
        const task= {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task)
        return task;
    }
    getTaskById(id: string){
        return this.tasks.find(task => task.id === id)
    }

    updateTasks(id: string, updatedFields: any) {
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updatedFields)
        this.tasks = this.tasks.map(task => task.id === id ? newTask :task)
        return newTask;
    }
    deleteTasks(id: string){
        this.tasks = this.tasks.filter(task => task.id !==id)
    }
}
