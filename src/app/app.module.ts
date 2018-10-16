import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskService } from './tasks/task.service';
import { TasksNewComponent } from './tasks/new/tasks-new.component';

import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TasksComponent,
    TasksNewComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
