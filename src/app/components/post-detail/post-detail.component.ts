import { Component, OnInit } from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteParams} from 'angular2/router';

import { Post } from '../../models/post'

@Component({
  selector: 'post-detail',
  templateUrl: 'app/components/post-detail/post-detail.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

export class PostDetailComponent implements OnInit {
  post: Post;
  private _selectedId: number;
  constructor(
    private _router: Router,
    private _routeParams: RouteParams) {
      // this._selectedId = + _routeParams.get('id');
  }
  ngOnInit() {
    let id = this._routeParams.get('id');
  }
}