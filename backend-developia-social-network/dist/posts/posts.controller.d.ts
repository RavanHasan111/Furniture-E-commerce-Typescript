import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
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
    findOne(id: string): {
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
    update(id: string, updatePostDto: UpdatePostDto): string;
    remove(id: string): string;
}
