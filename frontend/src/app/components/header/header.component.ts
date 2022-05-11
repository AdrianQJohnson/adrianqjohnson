import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/services/content/content.service';
import { Project } from 'src/models/project.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public content: any;
  public projectList: Project[] = [];

  constructor(private router: Router, private contentService: ContentService) { }

  ngOnInit(): void {
    this.content = this.contentService.getProjectContent()
    this.projectList = this.content.projects
  }

  public directToProject(project: any){
    this.router.navigate(['/projects', project.category, project.title], {state: project})
  }

}
