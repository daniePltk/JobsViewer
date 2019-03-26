import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JobPreviewComponent } from './job-preview.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { JobsListComponent } from '../jobs-list/jobs-list.component';
import { JobsService } from '../jobs-list/jobs.service';
import { HttpClientModule } from '@angular/common/http';
import { firstElementMockFixture } from '../../assets/mock-data.fixture';

describe('JobPreviewComponent', () => {
  let component: JobPreviewComponent;
  let comp: JobsListComponent;
  let fixture: ComponentFixture<JobPreviewComponent>;
  let fix: ComponentFixture<JobsListComponent>;
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
    fixture = TestBed.createComponent(JobPreviewComponent);
    fix = TestBed.createComponent(JobsListComponent);
    component = fixture.componentInstance;
    comp = fix.componentInstance;
    fix.detectChanges();
  }));

  it('should create a Preview container', async(() => {
    fix.detectChanges();
    const job = fix.debugElement.nativeElement.querySelector('.list-group li:first-child');
    job.click();
    fix.detectChanges();
    const previewContainer = fix.debugElement.nativeElement.querySelector('.preview-container app-job-preview');
    expect(previewContainer).toBeTruthy();
  }));

  it('should contain a Preview container with image and description for the first child in list in comparison to mock fixture', async(() => {
    fix.detectChanges();
    const job = fix.debugElement.nativeElement.querySelector('.list-group li:first-child');
    job.click();
    fix.detectChanges();
    const previewContainerImage = fix.debugElement.nativeElement.querySelector('app-job-preview .img-thumbnail');
    const previewContainerDescription = fix.debugElement.nativeElement.querySelector('app-job-preview .preview-container-description');
    expect(previewContainerImage.currentSrc).toContain(firstElementMockFixture.dataMock.thumbnail);
    expect(previewContainerDescription.innerHTML).toContain(firstElementMockFixture.dataMock.description);
  }));

});
