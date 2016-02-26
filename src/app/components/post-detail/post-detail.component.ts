import { Component } from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import { Post } from '../../models/post'

@Component({
  selector: 'post-detail',
  templateUrl: 'app/components/post-detail/post-detail.html',
})

export class PostDetailComponent {
  post: Post;
  private _selectedId: number;
  constructor(
    private _router: Router,
    routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
  }
}