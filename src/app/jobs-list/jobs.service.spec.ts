import { TestBed } from '@angular/core/testing';

import { JobsService } from './jobs.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('JobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      BrowserModule, HttpClientModule
    ],
    providers: [JobsService]
  }));

  it('JobsService should be created', () => {
    const service: JobsService = TestBed.get(JobsService);
    expect(service).toBeTruthy();
  });
});
