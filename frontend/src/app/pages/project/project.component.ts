import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projectNumber: Number = 1;
  public project: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.project = this.router.url
  }

}
