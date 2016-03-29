import {bootstrap}         from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy,
        HashLocationStrategy,
        PathLocationStrategy,
        APP_BASE_HREF }  from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';

// add these symbols to override the `LocationStrategy`
import {provide}           from 'angular2/core';

import {AppComponent}      from './app.component';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: PathLocationStrategy}) // .../#/
]);
