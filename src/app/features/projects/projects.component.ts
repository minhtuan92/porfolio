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
        name: 'Bussiness Workflow Management System - Technical Lead',
        shortName: 'Dynamic Workflow',
        desc: `Description: A system to manage company business activities include modules: Dynamic Workflow using BPMN, Form Management, Task Management, ...
              
              Responsibilities: define technology, technical stack and optimize development processes for this project. Work closely with PO and technical architect on feature design, requirement clarifications, and architecture clarification. Propose good design patterns and implementation guidelines for team. Perform general development activities: code development, unit test, code deployment, technical documentation, and maintenance works (fix bug or customer issues, support customer requests/questions directly). Perform code review, technical support for team members. Troubleshoot and handle technical blocker issues. Review performance and security for this project. Training new members.
              
              Technologies: c#, netcore 6.0, entity framework, Angular, tailwindCSS, typescript, SCSS, postgreSQL, mongoDB, keycloak, hangfire, kafka, sonarqube, firebase`
      },
      {
        id: 4,
        name: 'Building Access Management System - Full Stack Developer',
        shortName: 'Building Access',
        desc: `Description: A building access control system, at its most basic form, is a way to ensure only authorized people are able to enter your building. This adds an additional layer of security and protection for your residents, employees, information, and assets.
              
              Responsibilities: perform front development activities on both BE (Nodejs) and FE(Angular), troubleshoot and handle technical blocker issues.
              
              Technologies: angular, tailwindCSS, nodejs, expressjs, material ui, aws lamda, aws s3, aws cloudFront, mongoDB, dynamoDB, firebase, sendgrid, twilio, mosquitto (mqtt), sonarqube...`
      },
      {
        id: 5,
        name: 'Web Automation Test - Automation QA',
        shortName: 'Web Automation',
        desc: `Description: Automation Testing for video conferencing and communication platform.
              
              Responsibilities: define code structure, technology stack. Develop new automation test and maintenance works. Troubleshoot issues and training for new member.
              
              Technologies: cypress, nodejs, typescript, selenium.`
      },
      {
        id: 6,
        name: 'Telecom Automation Test 2 - Automation QA',
        shortName: 'Telecom Automation 2',
        desc: `Description: Automation test for telecom project.
              
              Responsibilities: define code structure, technology stack. Develop new automation test and maintenance works. Troubleshoot issues and training for new member.
              
              Technologies: python, robotframework, selenium, appium.`
      },
      {
        id: 7,
        name: 'Telecom Automation Test 1 - Automation QA',
        shortName: 'Telecom Automation 1',
        desc: `Description: Automation test for telecom project.
              
              Responsibilities: develop new automation test and maintenance works. Troubleshoot issues.
              
              Technologies: junit, java, selenium.`
      }
    ]
  }
}
