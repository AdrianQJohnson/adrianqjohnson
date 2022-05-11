import { Injectable } from '@angular/core';
import * as project_content from '../../../assets/content/projects.json'
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getProjectContent() {
    return project_content
  }
}
