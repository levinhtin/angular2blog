import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PostDetailComponent } from '../components/post-detail/post-detail.component';
import { AboutComponent } from '../components/about/about.component';

export const appRoutes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:alias/:id', component: PostDetailComponent }
];

export const APP_ROUTER_PROVIDERS: any = [
  provideRouter(appRoutes)
];

