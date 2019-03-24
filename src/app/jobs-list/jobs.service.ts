import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JobsService {

  constructor(private http: HttpClient) {
  }

  getJobs(): Observable<any> {
    return this.http.get('./assets/jobs.json');
  }
}
