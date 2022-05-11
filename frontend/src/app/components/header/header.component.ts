import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public projectList: any = [
    {
      title: 'Digibois',
      category: 'games',
      description: ''
    },
    {
      title: 'MegaFlexCLT',
      category: 'websites',
      description: ''
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public directToProject(project: any){
    this.router.navigate(['/projects', project.category, project.title], {state: project})
  }

}
