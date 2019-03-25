import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobPreviewComponent } from './job-preview/job-preview.component';
import { JobsService } from './jobs-list/jobs.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JobsListComponent,
    JobPreviewComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [JobsService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
