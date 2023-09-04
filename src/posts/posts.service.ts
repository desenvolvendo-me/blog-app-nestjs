// src/posts/posts.service.ts

import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [];

  findAll(): Post[] {
    return this.posts;
  }

  create(post: Post) {
    this.posts.push(post);
  }

  delete(id: number) {
    const index = this.posts.findIndex(post => post.id === id);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }
}
