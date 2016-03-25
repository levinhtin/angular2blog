import { Component } from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import { Post } from '../../models/post';
import { PostService} from '../../services/post.service';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  providers: [ROUTER_PROVIDERS, PostService],
  pipes: [],
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent {
  private posts: Post[];
  private postService: PostService;
  private router: Router;

  constructor(_postService: PostService, _router: Router) {
    this.postService = _postService;
    this.router = _router;
  }

  public gotoDetail(post: Post): void {
    // this._router.navigate(['Detail', { id: post.Id }]);
    let link: any = ['Detail', { id: post.Id }];
    this.router.navigate(link);
  }
  public getPosts(): void {
    this.postService.getPosts().then(
      (_posts: Post[]) => this.posts = this.setAlias(_posts)
    );
  }
  public setAlias(items: Post[]): Post[] {
    let regx1: any = /(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g;
    let regx2: any = /\s+/g;

    items.forEach((post: Post) => {
      post.Alias = post.Title.toLowerCase().replace(regx1, '').replace(regx2, '-');
    });
    return items;
  }

  public ngOnInit(): void {
    this.getPosts();
  }
}
