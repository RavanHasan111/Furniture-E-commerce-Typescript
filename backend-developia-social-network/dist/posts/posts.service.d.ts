import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsService {
    create(createPostDto: CreatePostDto): string;
    findAll(): {
        id: number;
        title: string;
        body: string;
        tags: string[];
        reactions: {
            likes: number;
            dislikes: number;
        };
        views: number;
        userId: number;
    }[];
    findOne(id: number): {
        id: number;
        title: string;
        body: string;
        tags: string[];
        reactions: {
            likes: number;
            dislikes: number;
        };
        views: number;
        userId: number;
    };
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
