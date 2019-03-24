import { Component, Input, OnInit } from '@angular/core';
import { JobModel } from '../jobs-list/job.model';

@Component({
  selector: 'app-job-preview',
  templateUrl: './job-preview.component.html',
  styleUrls: ['./job-preview.component.scss']
})
export class JobPreviewComponent implements OnInit {
  @Input() jobItem: JobModel;
  constructor() { }

  ngOnInit() {
  }

}
