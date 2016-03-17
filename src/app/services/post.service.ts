import { Injectable } from 'angular2/core';
import {MockBackend} from 'angular2/http/testing';

import { Post } from '../models/post';
import { POSTS } from '../data/mocks/mock-posts';

@Injectable()
export class PostService {
  constructor() {};

  public getPosts(): any {
    return Promise.resolve(POSTS);
  };
}
