import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { TaskStatus } from "../tasks.entity";

TaskStatus
export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    description: string
}

export class updateTaskDto{
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.DONE, TaskStatus.IN_PROGRESS])
    status?: TaskStatus;
}