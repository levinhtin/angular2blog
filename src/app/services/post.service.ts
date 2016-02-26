import { Injectable } from 'angular2/core';
import { Post } from '../models/post';
import { POSTS } from '../data/mocks/mock-posts';

@Injectable()
export class PostService {
  public getPosts(){
    return Promise.resolve(POSTS);
  };
}
