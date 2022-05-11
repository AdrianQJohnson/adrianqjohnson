import { Component, OnInit } from '@angular/core';
import { ContentService } from './services/content/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  public project: any
  
  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.project = this.contentService.getProjectContent()
  }
}
