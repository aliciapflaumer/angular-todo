import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TasksComponent } from './tasks/tasks.component';

import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TasksComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
