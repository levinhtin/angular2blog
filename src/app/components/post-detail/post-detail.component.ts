import { Component } from 'angular2/core';
import { Post } from '../../models/post'

@Component({
  selector: 'post-detail',
  templateUrl: 'app/components/post-detail/post-detail.html',
})

export class PostDetailComponent {
  post: Post;
  
}