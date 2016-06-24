import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

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
  ]
})

export class AppComponent {
  constructor() {}
}

