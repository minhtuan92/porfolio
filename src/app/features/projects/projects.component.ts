import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProjectComponent } from '@shared/components'

import { ProjectItem } from '@shared/models'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectItem[]

  ngOnInit(): void {
    this.projects = [
      {
        id: 1,
        name: 'Formbuilder Application - Technical Lead',
        shortName: 'Formbuilder',
        desc: `Description: This is an application to build form from JSON scheme.
              Responsibilities: discuss with clients to clarify their high-level design, perform front development activities, troubleshoot and handle technical blocker issues.
              Technologies: angular, bootstrap, tailwindCSS, typescript, SCSS, sonarqube, trivy, bearer`
      },
      {
        id: 2,
        name: 'Travel Management System - Frontend Developer',
        shortName: 'Travel Assistant',
        desc: `Description: An application to manage travel tour, social network, e-commercial.
              Responsibilities: perform front development activities, troubleshoot and handle technical blocker issues.
              Technologies: angular, tailwindCSS, springboot, typescript, java, cassandra, postgreSQL, mongoDB, kafka, redis...`
      },
      {
        id: 3,
        name: 'BUSSINESS WORKFLOW MANAGEMENT SYSTEM - Technical Lead',
        shortName: 'Dynamic Workflow',
        desc: `Description: A system to manage company business activities include modules: Dynamic Workflow using BPMN, Form Management, Task Management, ...
              Responsibilities: perform front development activities, troubleshoot and handle technical blocker issues.
              Technologies: angular, tailwindCSS, springboot, typescript, java, cassandra, postgreSQL, mongoDB, kafka, redis...`
      }
    ]
  }
}
