import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Home | Adrian Johnson'} },
  { path: 'about', component: AboutComponent, data: {title: 'About Me | Adrian Johnson'} },
  { path: 'contact', component: ContactComponent, data: {title: 'Contact Me | Adrian Johnson'} },
  { path: 'projects', component: ProjectsComponent, data: {title: 'All Projects | Adrian Johnson'} },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
