import { Component } from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import { Post } from '../../models/post';

@Component({
  selector: 'post-detail',
  templateUrl: 'app/components/post-detail/post-detail.html',
  directives: [ROUTER_DIRECTIVES]
})

export class PostDetailComponent {
  private post: Post;
  private _selectedId: number;
  private router: Router;

  constructor(_router: Router, routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
      this.router = _router;
  }
}
