import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import { Post } from '../../models/post';

@Component({
  selector: 'post-detail',
  templateUrl: 'app/components/post-detail/post-detail.html'
})

export class PostDetailComponent implements OnInit {
  private post: Post;
  private _selectedId: number;
  private router: Router;
  private routeParams: RouteParams;

  constructor(_router: Router, _routeParams: RouteParams) {
      this.router = _router;
      this.routeParams = _routeParams;
  }
  ngOnInit() {
    let id = this.routeParams.get('id');
  }
}
