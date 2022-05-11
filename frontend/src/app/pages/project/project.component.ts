import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/services/content/content.service';
import { Project } from 'src/models/project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projectNumber: Number = 1;
  public project: any;
  public content: any;
  public projectList: Project[] = [];

  constructor(private router: Router, private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.projectList = this.contentService.getProjectContent().projects

    let projectUrl = this.router.url.split('/')
    let projectTitle = projectUrl[projectUrl.length - 1]
    projectTitle = decodeURI(projectTitle)

    this.project = this.projectList.find((obj) => {
      if (projectTitle === obj.title){
        return obj
      }
      else {
        return null
      }
    })
  }

}
