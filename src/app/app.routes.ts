import { Routes } from '@angular/router'
import { MainLayoutComponent } from './shared/layouts'

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then((x) => x.HomeComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about.component').then((x) => x.AboutComponent)
      },
      {
        path: 'skills',
        loadComponent: () => import('./features/skills/skills.component').then((x) => x.SkillsComponent)
      },
      {
        path: 'resume',
        loadComponent: () => import('./features/resume/resume.component').then((x) => x.ResumeComponent)
      },
      {
        path: 'projects',
        loadComponent: () => import('./features/projects/projects.component').then((x) => x.ProjectsComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component').then((x) => x.ContactComponent)
      }
    ]
  },
  { path: '**', redirectTo: '' }
]
