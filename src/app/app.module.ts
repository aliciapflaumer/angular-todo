import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { AppRouterModule } from './app-router.module';

// const appRoutes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomepageComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true }
    // ),
    AppRouterModule,
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
