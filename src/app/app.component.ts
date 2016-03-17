import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'blog-app',
  templateUrl: 'app/app.html',
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  { path: '/', component: HomeComponent, name: 'Home' },
  { path: '/post/detail/:id', component: PostDetailComponent, name: 'Detail'},
  { path: '/about', component: AboutComponent, name: 'About'}
])

export class AppComponent {
  constructor() {}
}

