import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListComponent } from './jobs-list.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { JobPreviewComponent } from '../job-preview/job-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsService } from './jobs.service';
import { DebugElement } from '@angular/core/src/debug/debug_node';


describe('JobsListComponent', () => {
  let component: JobsListComponent;
  let fixture: ComponentFixture<JobsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JobsListComponent, JobPreviewComponent],
      imports: [
        BrowserModule, HttpClientModule
      ],
      providers: [JobsService]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the JobsListComponent', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should contain a List of jobs when jobs list is instantiated ', async(() => {
    fixture.detectChanges();
    const list = fixture.debugElement.query(By.css('.list-group'));
    expect(list).toBeTruthy();
  }));

  it('Job item when clicked should be activated on click', async(() => {
    fixture.detectChanges();
    const job = fixture.debugElement.nativeElement.querySelector('.list-group li:first-child');
    expect(job.classList.contains('active'));
    job.click();
    fixture.detectChanges();
    expect(job.classList.contains('active'));
  }));
});

