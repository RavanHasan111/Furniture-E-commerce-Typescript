import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { IsNotEmpty, IsString, Length, MaxLength, MinLength } from "class-validator";


export class UpdatePostDto {
    @IsString({message: 'Title must be a string'})
    @IsNotEmpty({message: 'Title is required'})
    @Length(3, 100, {message: 'Title must be between 3 and 100 characters'})
    title: string;
}





