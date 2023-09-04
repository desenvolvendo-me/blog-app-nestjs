// src/posts/posts.controller.ts

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): PostEntity[] {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() post: PostEntity) {
    this.postsService.create(post);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.postsService.delete(id);
  }
}
