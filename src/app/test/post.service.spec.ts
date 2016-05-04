import {Component, provide} from '@angular/core';
import {it, describe, expect, beforeEach, afterEach, beforeEachProviders, inject, injectAsync} from '@angular/core/testing';
import {BaseRequestOptions, Http} from '@angular/http';

import {Post} from '../models/post';
import {PostService} from '../services/post.service';
import { POSTS } from '../data/mocks/mock-posts';

describe('MyList Tests', () => {

  beforeEachProviders(() => [
    // BaseRequestOptions,
    // MockBackend,
    provide(Http, {
      useFactory: (backend: any, defaultOptions: any): any => {
        return new Http(backend, defaultOptions);
      }
      // deps: [MockBackend, BaseRequestOptions]
    }),

    PostService
  ]);

  it('Should be greater than 10 items', injectAsync([PostService], (postSrv: PostService) => {
      return postSrv.getPosts()
          .then((res: any) => {
            expect(res.length).toBeGreaterThan(10);
          });
  }));
});
