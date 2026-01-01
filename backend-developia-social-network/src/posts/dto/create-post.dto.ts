import { IsNotEmpty, IsString, Length, MaxLength, MinLength } from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    // @MinLength(3)
    // @MaxLength(100)
    @Length(3, 100)
    title: string;
}



