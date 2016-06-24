import {bootstrap}         from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

// add these symbols to override the `LocationStrategy`
import {provide, enableProdMode}           from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {APP_ROUTER_PROVIDERS} from './routers/app.routes';

import {AppComponent}      from './app.component';

// enableProdMode()

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
])
.catch(err => console.error(err));
