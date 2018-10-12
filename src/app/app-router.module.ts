import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksNewComponent } from './tasks/new/tasks-new.component';

const Router = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/new', component: TasksNewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(Router) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
