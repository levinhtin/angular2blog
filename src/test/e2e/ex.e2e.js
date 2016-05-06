// import {
//   beforeEachProviders,
//   describe,
//   expect,
//   inject,
//   it
// } from '@angular/core/testing';
// import {
//   ComponentFixture,
//   TestComponentBuilder
// } from '@angular/compiler/testing';
// import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
// import { AppComponent } from '../../app/app.component';
// // import { setBaseTestProviders } from '@angular/core/testing';
// import {
//   TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS,
//   TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS
// } from '@angular/platform-browser-dynamic/testing';
// // setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
// describe('App', () => {
//   // unit tests which uses Router: https://github.com/mgechev/angular2-seed/blob/master/app/components/app/app_spec.ts#L30
//   beforeEachProviders(() => [ROUTER_FAKE_PROVIDERS]);
//   it('should correctly home page title', () => {
//       expect(true).toBe(true);
//   });
//   // it('should be able to test', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
//   //   return tcb.createAsync(AppComponent).then((componentFixture: ComponentFixture<AppComponent>) => {
//   //     componentFixture.detectChanges();
//   //     expect(true).toBe(true);
//   //   });
//   // }));
// });
// import {
//   fit,
//   it,
//   xit,
//   fdescribe,
//   describe,
//   expect,
//   inject,
//   async,
//   beforeEach,
//   beforeEachProviders
// } from '@angular/core/testing';
// import {
//   ComponentFixture,
//   TestComponentBuilder
// } from '@angular/compiler/testing';
// import { By } from '@angular/platform-browser';
// import { Injectable, Component, provide } from '@angular/core';
// import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
// import {RouteRegistry, Router, ROUTER_PRIMARY_COMPONENT} from '@angular/router-deprecated';
// import {Location, LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF} from '@angular/common';
// import {RootRouter} from '@angular/router-deprecated/src/router';
// import {SpyLocation} from '@angular/common/testing';
// import { PostDetailComponent } from '../../app/components/post-detail/post-detail.component';
// // setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
// describe('Home Page', () => {
//     let builder: any;
//     beforeEachProviders(() => [
//       RouteRegistry,
//       ROUTER_FAKE_PROVIDERS,
//       provide(Location, { useClass: SpyLocation }),
//       { provide: LocationStrategy, useClass: PathLocationStrategy },
//       provide(Router, { useClass: RootRouter }),
//       provide(ROUTER_PRIMARY_COMPONENT, { useValue: PostDetailComponent })
//     ]);
//     beforeEach(inject([TestComponentBuilder], (tcb: any) => {
//       builder = tcb;
//     }));
//     // it('should correctly home page title', () => {
//     //     // browser.sleep(5000);
//     //     expect(browser.getTitle()).toEqual('Angular 2 QuickStart');
//     // });
//     it('should change title', async(() => {
//       builder.createAsync(PostDetailComponent).then((fixture: ComponentFixture<PostDetailComponent>) => {
//         // fixture.detectChanges();
//         // fixture.debugElement.componentInstance.title = 'New Title';
//         // fixture.detectChanges();
//         // let compiled: any = fixture.debugElement.nativeElement;
//         expect(1).toEqual(1);
//         // expect(compiled.querySelector('h3')).toHaveText('New Title');
//       });
//     }));
// });
//# sourceMappingURL=ex.e2e.js.map