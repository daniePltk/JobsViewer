import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobPreviewComponent } from './job-preview/job-preview.component';
import { JobsService } from './jobs-list/jobs.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, JobsListComponent, JobPreviewComponent
      ],
      imports: [
        BrowserModule, HttpClientModule
      ],
      providers: [JobsService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'JobsViewer'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('JobsViewer');
  });
});
