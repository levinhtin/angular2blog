import { Injectable } from 'angular2/core';
import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
  public getPosts(){
    return Promise.resolve(POSTS);
  };
}
