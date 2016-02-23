import { Component } from 'angular2/core';
import { Post } from './post';
import { PostService} from './post.service';

@Component({
  selector: 'home-posts',
  templateUrl: 'app/layout/homeposts.html',
  providers: [PostService]
})

export class HomePostComponent {
  posts: Post[];
  
  constructor(private _postService: PostService) { }

  getPosts() {
    this._postService.getPosts().then(posts => this.posts = posts);
  }
  
  ngOnInit() {
    this.getPosts();
  }
}
