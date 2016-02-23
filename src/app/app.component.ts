import {Component} from 'angular2/core';
// import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'blog-app',
  templateUrl: 'app/app.html',
  // directives: [ROUTER_DIRECTIVES],
})

// @RouteConfig([
//   new Route({ path: '', component: HomeComponent, name: 'Home', useAsDefault: true}),
//   // new Route({ path: '/post-detail', component: Post, name: 'About'}),
//   // new Route({ path: '/github/...', component: RepoBrowser, name: 'RepoBrowser'})
// ])

export class AppComponent { 
  constructor() {}
}

