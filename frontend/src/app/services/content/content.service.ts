import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import project_content from '../../../assets/content/projects.json'
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getProjectContent() {
    return project_content
  }
}
