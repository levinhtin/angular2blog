import { Component } from 'angular2/core';
import { Post } from '../../models/post';
import { PostService} from '../../services/post.service';

@Component({
  selector: 'home',
  templateUrl: 'app/layout/homep.html',
  providers: [PostService],
  pipes: [],
  directives: [],
})

export class HomeComponent {
  posts: Post[];
  
  constructor(private _postService: PostService) { }

  getPosts() {
    this._postService.getPosts().then(posts => this.posts = posts);
  }
  
  ngOnInit() {
    this.getPosts();
  }
}
