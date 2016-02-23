import {Component} from 'angular2/core';
import { Post } from './post';
import { HomePostComponent } from './home-post.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/layout/myapp.html',
    directives: [HomePostComponent]
})
export class AppComponent { }

