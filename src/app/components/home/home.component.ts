import { Component } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { Post } from '../../models/post';
import { PostService} from '../../services/post.service';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  providers: [ PostService],
  pipes: []
})

export class HomeComponent {
  posts: Post[];

  constructor(
    private _postService: PostService,
    private _router: Router) { }

  public gotoDetail(post: Post){
    // this._router.navigate(['Detail', { id: post.Id }]);
    let link = ['Detail', { alias: post.Alias, id: post.Id }];
    this._router.navigate(link);
  }

  public goToAbout() {
    this._router.navigate(['About']);
  }

  public getPosts() {
    this._postService.getPosts().then(
      _posts => this.posts = this.setAlias(_posts)
    );
  }

  public setAlias(items: Post[]): Post[]{
    var regx1 = /(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g;
    var regx2 = /\s+/g;

    items.forEach(element => {
      element.Alias = element.Title.toLowerCase().replace(regx1, '').replace(regx2, '-');
    });
    return items;
  }

  ngOnInit() {
    this.getPosts();
  }
}