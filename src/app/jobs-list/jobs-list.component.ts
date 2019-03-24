import { Component, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';
import { JobModel } from './job.model';


export interface IResponse {
  body: Array<JobModel>;
}

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  response: IResponse;
  jobsList: Array<JobModel>;
  activeJobsList: Array<JobModel>;
  chosenJob: JobModel;
  previewedJob: JobModel;

  constructor(private jobService: JobsService) {
  }

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe(data => {
      this.response = data;
      this.jobsList = this.response.body;
      this.activeJobsList = this.jobsList.filter((job: JobModel) => {
        return job.state === 'active';
      });
    }, error => {
      console.log(error);
    });
  }

  previewJob(job: JobModel) {
    this.previewedJob = job;
    this.chosenJob = Object.assign({}, job);

  }
}
