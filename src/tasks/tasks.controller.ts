import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDto, updateTaskDto } from './dto/task.dto';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }
    @Post()
    createTask(@Body() newTask: CreateTaskDto) {
        return this.tasksService.createTasks(newTask.title, newTask.description)

        // this.tasksService.createTasks()
    }
    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTasks(id)
    }

    @Patch(':id')
    updateTask(@Param("id") id: string, @Body() updatedFields: updateTaskDto) {
        return this.tasksService.updateTasks(id, updatedFields)
    }
}
