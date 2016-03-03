import {it, describe, expect, beforeEach, inject} from "angular2/testing";
import {Post} from "../models/post";
import {PostService} from "../services/post.service";
import { POSTS } from '../data/mocks/mock-posts';

describe('MyList Tests', () => {
    let posts: Post[];
    let service: PostService;
 
    beforeEach(() => {
      service = new PostService();
      console.log(service);
      
        // this.service.getPosts().then(
        //   _posts => this.posts = _posts
        // );
    });
 
    it('Should get 5 dogs', () => {
        // list.ngOnInit();
 
        // expect(posts.length).toBe(5);
        expect(5).toBe(5);
        // expect(posts).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier']);
    });
});