import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Task } from './task';

@Injectable()
export class TaskService {
  private tasksURL = 'http://localhost:3000/tasks.json';

  constructor(
    private http: Http
  ) {}

  getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksURL)
                    .map((response: Response) => <Task[]>response.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} $}err`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
