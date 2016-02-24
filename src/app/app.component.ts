import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

@Component({
  selector: 'blog-app',
  templateUrl: 'app/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
  ]
})

@RouteConfig([
  { path: '/home', component: HomeComponent, name: 'Home', useAsDefault: true},
  { path: '/post/:alias/:id', component: PostDetailComponent, name: 'Detail'},
  // new Route({ path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'})
])

export class AppComponent { 
  constructor() {}
}

